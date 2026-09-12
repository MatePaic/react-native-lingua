import { useAuth, useClerk } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="heading-1 text-center !text-deep-purple">Lingua</Text>

      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={0.9}
        className="mt-6 rounded-full bg-deep-purple px-10 py-4"
        onPress={() => signOut()}
      >
        <Text className="font-poppins-semibold text-h4 text-background">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
