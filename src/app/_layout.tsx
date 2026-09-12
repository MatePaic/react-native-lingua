import { ClerkProvider, useAuth, useUser } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  PostHogErrorBoundary,
  PostHogProvider,
  usePostHog,
} from "posthog-react-native";
import { useEffect, useRef } from "react";

import { posthog } from "@/lib/posthog";
import "../global.css";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

const clerkPublishableKey: string = publishableKey;

function PostHogIdentity() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const client = usePostHog();
  const identifiedUserId = useRef<string | null>(null);
  const hasResolvedClerkState = useRef(false);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!hasResolvedClerkState.current) {
      client.reset();
      hasResolvedClerkState.current = true;
    }

    if (!isSignedIn || !user?.id) {
      if (identifiedUserId.current) {
        client.reset();
        identifiedUserId.current = null;
      }
      return;
    }

    if (identifiedUserId.current === user.id) {
      return;
    }

    if (identifiedUserId.current) {
      client.reset();
    }

    client.identify(user.id, {
      ...(user.primaryEmailAddress?.emailAddress
        ? { email: user.primaryEmailAddress.emailAddress }
        : {}),
      ...(user.fullName ? { name: user.fullName } : {}),
    });
    identifiedUserId.current = user.id;
  }, [client, isLoaded, isSignedIn, user]);

  return null;
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const router = <Stack screenOptions={{ headerShown: false }} />;

  return (
    <ClerkProvider publishableKey={clerkPublishableKey} tokenCache={tokenCache}>
      {posthog ? (
        <PostHogProvider client={posthog}>
          <PostHogIdentity />
          <PostHogErrorBoundary>{router}</PostHogErrorBoundary>
        </PostHogProvider>
      ) : (
        router
      )}
    </ClerkProvider>
  );
}
