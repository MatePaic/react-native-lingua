import { useSSO } from "@clerk/expo/experimental";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";

const PROVIDERS = [
  { label: "Continue with Google", icon: images.socialGoogle, strategy: "oauth_google" },
  { label: "Continue with Facebook", icon: images.socialFacebook, strategy: "oauth_facebook" },
  { label: "Continue with Apple", icon: images.socialApple, strategy: "oauth_apple" },
] as const;

/**
 * "or continue with" divider plus the three social buttons. Each one opens
 * Clerk's browser-based SSO flow for its provider.
 */
export function SocialAuthOptions() {
  const { startSSOFlow } = useSSO();
  const [pendingStrategy, setPendingStrategy] = useState<string | null>(null);

  const handlePress = async (strategy: (typeof PROVIDERS)[number]["strategy"]) => {
    setPendingStrategy(strategy);
    try {
      const { createdSessionId } = await startSSOFlow({ strategy });
      if (createdSessionId) {
        router.replace("/");
      }
      // No createdSessionId means the user cancelled — nothing to do.
    } catch (err) {
      console.error(`${strategy} sign-in failed:`, err);
    } finally {
      setPendingStrategy(null);
    }
  };

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
            disabled={pendingStrategy !== null}
            onPress={() => handlePress(provider.strategy)}
            className={`h-14 flex-row items-center rounded-2xl border border-border bg-background px-10 ${
              pendingStrategy !== null ? "opacity-60" : ""
            }`}
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
