import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/constants/theme";
import type { Language } from "@/types/learning";

type LanguageCardProps = {
  language: Language;
  selected: boolean;
  onPress: () => void;
};

/**
 * A single row on the language selection screen. Selected rows get a purple
 * outline, tinted background, and a checkmark badge; the rest show a chevron.
 */
export function LanguageCard({ language, selected, onPress }: LanguageCardProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={language.name}
      accessibilityState={{ selected }}
      activeOpacity={0.8}
      onPress={onPress}
      className={`mb-4 flex-row items-center rounded-2xl border px-4 py-3.5 ${
        selected ? "border-2 border-deep-purple bg-deep-purple/5" : "border-border"
      }`}
    >
      <Image source={language.flag} contentFit="cover" style={styles.flag} />

      <View className="ml-4 flex-1">
        <Text className="font-poppins-semibold text-h4 text-text-primary">
          {language.name}
        </Text>
        <Text className="body-small mt-0.5">{language.learners}</Text>
      </View>

      {selected ? (
        <View className="h-7 w-7 items-center justify-center rounded-full bg-deep-purple">
          <Text className="font-poppins-bold text-body-sm text-background">✓</Text>
        </View>
      ) : (
        <View className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-text-secondary" />
      )}
    </TouchableOpacity>
  );
}

/* expo-image's Image isn't interopped by NativeWind, so className is silently
   dropped on native (works by accident on web, where className is just a
   real DOM attribute) — size it with StyleSheet instead. */
const styles = StyleSheet.create({
  flag: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
});
