import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="heading-1 text-center !text-deep-purple">Lingua</Text>

      <Link href="/onboarding" className="heading-4 mt-4 !text-deep-purple">
        Open onboarding
      </Link>
    </View>
  );
}
