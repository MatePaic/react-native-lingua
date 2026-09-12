import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PersistStorage, StorageValue } from "zustand/middleware";

import type { LanguageId } from "@/types/learning";

interface LanguageState {
  selectedLanguageId: LanguageId | null;
  hasHydrated: boolean;
  setSelectedLanguage: (languageId: LanguageId) => void;
  clearSelectedLanguage: () => void;
  setHasHydrated: (value: boolean) => void;
}

type PersistedLanguageState = Pick<LanguageState, "selectedLanguageId">;

/**
 * Custom PersistStorage (not createJSONStorage) so we own JSON.parse
 * ourselves: createJSONStorage's internal parse can't be wrapped from the
 * outside, and an unguarded parse of corrupted data leaves zustand's
 * hydration permanently unresolved (hasHydrated never flips true).
 * On any read/parse failure we clear the bad key and resolve null, which
 * zustand treats as an ordinary "nothing persisted yet" hydration.
 */
const safeStorage: PersistStorage<PersistedLanguageState> = {
  getItem: async (name) => {
    let raw: string | null;
    try {
      raw = await AsyncStorage.getItem(name);
    } catch (error) {
      console.error(`[language-store] Failed to read "${name}" from AsyncStorage`, error);
      await AsyncStorage.removeItem(name).catch(() => {});
      return null;
    }

    if (raw === null) return null;

    try {
      return JSON.parse(raw) as StorageValue<PersistedLanguageState>;
    } catch (error) {
      console.error(`[language-store] Failed to parse "${name}"; clearing it`, error);
      await AsyncStorage.removeItem(name).catch(() => {});
      return null;
    }
  },
  setItem: async (name, value) => {
    try {
      await AsyncStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.error(`[language-store] Failed to write "${name}" to AsyncStorage`, error);
    }
  },
  removeItem: async (name) => {
    try {
      await AsyncStorage.removeItem(name);
    } catch (error) {
      console.error(`[language-store] Failed to remove "${name}" from AsyncStorage`, error);
    }
  },
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      hasHydrated: false,
      setSelectedLanguage: (languageId) => set({ selectedLanguageId: languageId }),
      clearSelectedLanguage: () => set({ selectedLanguageId: null }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "language-storage",
      storage: safeStorage,
      partialize: (state) => ({ selectedLanguageId: state.selectedLanguageId }),
      onRehydrateStorage: () => (_state, error) => {
        if (error) {
          console.error("[language-store] Hydration error", error);
        }
        useLanguageStore.getState().setHasHydrated(true);
      },
    },
  ),
);
