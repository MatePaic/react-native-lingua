import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/PrimaryButton";
import { SpeechBubble } from "@/components/SpeechBubble";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <ScrollView
        className="flex-1 px-6 pb-4 pt-4"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Logo */}
        <View className="flex-row items-center justify-center">
          <Image
            source={images.mascotLogo}
            contentFit="contain"
            style={{ width: 64, height: 64 }}
          />
          <Text className="font-poppins-semibold text-[28px] tracking-tight text-text-primary">
            lingua
          </Text>
        </View>

        {/* Headline */}
        <Text className="heading-1 mt-7 leading-[42px]">
          Your AI language{"\n"}
          <Text className="text-deep-purple!">teacher</Text>.
        </Text>
        <Text className="body-large mt-1.5 text-text-secondary!">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        {/* Mascot + speech bubbles (full bleed, so bubbles can sit near the edges) */}
        <View className="relative -mx-6 flex-1 items-center justify-center">
          <Image
            source={images.mascotWelcome}
            contentFit="contain"
            style={{ width: "130%", height: "100%" }}
          />

          <SpeechBubble
            label="Hello!"
            tone="blue"
            tail="right"
            className="left-[10%] top-[7%] -rotate-[8deg]"
          />
          <SpeechBubble
            label="¡Hola!"
            tone="purple"
            tail="left"
            className="right-[13%] top-[3%] rotate-[10deg]"
          />
          <SpeechBubble
            label="你好!"
            tone="peach"
            tail="left"
            className="right-[5%] top-[21%] rotate-[10deg]"
          />
        </View>

        <PrimaryButton label="Get Started" onPress={() => router.push("/sign-up")} />
      </ScrollView>
    </SafeAreaView>
  );
}
