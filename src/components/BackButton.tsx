import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

/**
 * Chevron that takes the user back one screen. The chevron itself is a square
 * with two borders, rotated 45° — the same trick the PrimaryButton uses.
 */
export function BackButton() {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel="Go back"
      activeOpacity={0.6}
      hitSlop={12}
      onPress={() => router.back()}
      className="h-6 w-6 items-center justify-center"
    >
      <View className="h-3.5 w-3.5 rotate-45 border-b-2 border-l-2 border-text-primary" />
    </TouchableOpacity>
  );
}
