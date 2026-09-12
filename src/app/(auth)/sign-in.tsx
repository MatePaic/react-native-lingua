import { useState } from "react";
import { useSignIn } from "@clerk/expo";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthMascot } from "@/components/AuthMascot";
import { AuthTextField } from "@/components/AuthTextField";
import { BackButton } from "@/components/BackButton";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SocialAuthOptions } from "@/components/SocialAuthOptions";
import { VerificationModal } from "@/components/VerificationModal";
import { colors } from "@/constants/theme";
import { clerkErrorMessage, navigateAfterAuth } from "@/lib/clerk";

export default function SignIn() {
  const { signIn, fetchStatus } = useSignIn();
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setFormError(null);

    const { error } = await signIn.emailCode.sendCode({ emailAddress: email });
    if (error) {
      setFormError(clerkErrorMessage(error));
      return;
    }

    setVerifyError(null);
    setIsVerifying(true);
  };

  const handleVerify = async (code: string) => {
    const { error } = await signIn.emailCode.verifyCode({ code });
    if (error) {
      setVerifyError(clerkErrorMessage(error));
      return;
    }

    if (signIn.status === "complete") {
      await signIn.finalize({ navigate: navigateAfterAuth });
    }
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
      >
        <BackButton />

        <Text className="heading-2 mt-8 font-poppins-bold!">Welcome back</Text>
        <Text className="body-large mt-3 text-text-secondary!">
          Log in and keep your streak going ✨
        </Text>

        <AuthMascot />

        <AuthTextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="alex@gmail.com"
          keyboardType="email-address"
          autoComplete="email"
        />

        {formError ? <Text className="body-small mt-3 text-error!">{formError}</Text> : null}

        <PrimaryButton
          label="Log In"
          gradient
          showChevron={false}
          className="mt-5"
          disabled={fetchStatus === "fetching"}
          onPress={handleSignIn}
        />

        <View className="mt-6">
          <SocialAuthOptions />
        </View>

        <Text className="body-medium mt-8 text-center text-text-secondary!">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="font-poppins-semibold text-deep-purple!">
            Sign up
          </Link>
        </Text>
      </ScrollView>

      <VerificationModal
        visible={isVerifying}
        email={email}
        error={verifyError}
        onClose={() => setIsVerifying(false)}
        onSubmit={handleVerify}
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
