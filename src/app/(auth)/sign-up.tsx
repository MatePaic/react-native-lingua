import { useState } from "react";
import { Link, router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthMascot } from "@/components/AuthMascot";
import { AuthTextField } from "@/components/AuthTextField";
import { BackButton } from "@/components/BackButton";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SocialAuthOptions } from "@/components/SocialAuthOptions";
import { VerificationModal } from "@/components/VerificationModal";
import { colors } from "@/constants/theme";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
      >
        <BackButton />

        <Text className="heading-2 mt-8 font-poppins-bold!">Create your account</Text>
        <Text className="body-large mt-3 text-text-secondary!">
          Start your language journey today ✨
        </Text>

        <AuthMascot />

        <View className="gap-3.5">
          <AuthTextField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="alex@gmail.com"
            keyboardType="email-address"
            autoComplete="email"
          />

          <AuthTextField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="At least 8 characters"
            autoComplete="new-password"
            secure
          />
        </View>

        <PrimaryButton
          label="Sign Up"
          gradient
          showChevron={false}
          className="mt-5"
          onPress={() => setIsVerifying(true)}
        />

        <View className="mt-6">
          <SocialAuthOptions />
        </View>

        <Text className="body-medium mt-8 text-center text-text-secondary!">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-poppins-semibold text-deep-purple!">
            Log in
          </Link>
        </Text>
      </ScrollView>

      <VerificationModal
        visible={isVerifying}
        email={email}
        onClose={() => setIsVerifying(false)}
        onVerified={() => {
          setIsVerifying(false);
          router.replace("/");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.neutral.background,
  },
  content: {
    paddingHorizontal: 28,
    paddingTop: 8,
    paddingBottom: 24,
  },
});
