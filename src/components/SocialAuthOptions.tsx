import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";

const PROVIDERS = [
  { label: "Continue with Google", icon: images.socialGoogle },
  { label: "Continue with Facebook", icon: images.socialFacebook },
  { label: "Continue with Apple", icon: images.socialApple },
] as const;

/**
 * "or continue with" divider plus the three social buttons. They are UI only
 * for now — the providers get wired up when we add Clerk.
 */
export function SocialAuthOptions() {
  return (
    <View>
      <View className="flex-row items-center">
        <View className="h-px flex-1 bg-border" />
        <Text className="body-medium px-4 text-text-secondary!">or continue with</Text>
        <View className="h-px flex-1 bg-border" />
      </View>

      <View className="mt-4 gap-2.5">
        {PROVIDERS.map((provider) => (
          <TouchableOpacity
            key={provider.label}
            accessibilityRole="button"
            activeOpacity={0.85}
            className="h-14 flex-row items-center rounded-2xl border border-border bg-background px-10"
          >
            <Image source={provider.icon} contentFit="contain" style={styles.icon} />
            <Text className="body-large ml-8">{provider.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
