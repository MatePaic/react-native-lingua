import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/theme";

type TabPlaceholderProps = {
  title: string;
  description: string;
};

/**
 * Simple "coming soon" screen shared by every tab until its real UI is built.
 * Only insets the top/side safe areas — the bottom one is already reserved by
 * `CustomTabBar`, which sits below this screen's content.
 */
export function TabPlaceholder({ title, description }: TabPlaceholderProps) {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <View className="flex-1 items-center justify-center px-8">
        <Text className="heading-2 text-center">{title}</Text>
        <Text className="body-medium mt-2 text-center text-text-secondary!">{description}</Text>
      </View>
    </SafeAreaView>
  );
}
