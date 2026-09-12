import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

import { useLanguageStore } from "@/store/language-store";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);

  if (!isLoaded || !hasHydrated) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguageId) {
    return <Redirect href="/language-selection" />;
  }

  return <Redirect href="/(tabs)/home" />;
}
