import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams, type Href } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackButton } from "@/components/BackButton";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { getLessonById } from "@/data/lessons";
import { posthog } from "@/lib/posthog";

/**
 * Bottom tabs, mirrored from CustomTabBar so this full-screen call route can
 * still show the app's tab chrome even though it lives outside the `(tabs)`
 * group (see CustomTabBar.tsx). Tapping another tab here exits the call.
 */
const TABS = [
  { name: "home", label: "Home", icon: "home", href: "/(tabs)/home" },
  { name: "learn", label: "Learn", icon: "book", href: "/(tabs)/learn" },
  { name: "ai-teacher", label: "AI Teacher", icon: "sparkles", href: "/(tabs)/ai-teacher" },
  { name: "chat", label: "Chat", icon: "chatbubble", href: "/(tabs)/chat" },
  { name: "profile", label: "Profile", icon: "person", href: "/(tabs)/profile" },
] as const satisfies { name: string; label: string; icon: keyof typeof Ionicons.glyphMap; href: Href }[];

/**
 * Mock scores shown after a lesson call — there's no live scoring yet (that
 * needs the real Vision Agent session from prompts 13-14), so this mirrors
 * the design's example feedback card.
 */
const FEEDBACK = [
  { label: "Speaking", value: "Excellent", className: "text-success!" },
  { label: "Pronunciation", value: "Great", className: "text-blue!" },
  { label: "Grammar", value: "Good", className: "text-deep-purple!" },
] as const;

/**
 * AI Teacher audio lesson screen. This is an audio-only experience: the
 * camera and self-preview are non-functional placeholders (see AGENTS.md
 * prompt — no real video calling), while mic and subtitles actually toggle
 * local UI state.
 */
export default function LessonDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = id ? getLessonById(id) : undefined;

  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [callSeconds, setCallSeconds] = useState(0);

  useEffect(() => {
    if (!lesson) return;

    posthog?.capture("lesson_call_started", {
      lesson_id: lesson.id,
      language_id: lesson.languageId,
    });

    const interval = setInterval(() => setCallSeconds((seconds) => seconds + 1), 1000);
    return () => clearInterval(interval);
  }, [lesson]);

  const endCall = () => {
    if (lesson) {
      posthog?.capture("lesson_call_ended", {
        lesson_id: lesson.id,
        language_id: lesson.languageId,
        duration_seconds: callSeconds,
      });
    }
    router.back();
  };

  if (!lesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
        <View className="flex-row items-center px-6 pt-4">
          <BackButton />
        </View>
        <View className="flex-1 items-center justify-center px-6">
          <Text className="body-medium text-text-secondary!">Lesson not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const phrase = lesson.phrases[0];

  return (
    <View style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <View className="flex-row items-center px-6 pt-2">
          <BackButton />

          <View className="ml-3 flex-1">
            <Text className="heading-4 font-poppins-semibold!" numberOfLines={1}>
              AI Teacher
            </Text>
            <View className="mt-0.5 flex-row items-center">
              <View className="h-2 w-2 rounded-full bg-success" />
              <Text className="caption ml-1.5 text-success!">Online</Text>
            </View>
          </View>

          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={isCameraOn ? "Turn camera off" : "Turn camera on"}
              hitSlop={6}
              onPress={() => setIsCameraOn((prev) => !prev)}
              className="h-10 w-10 items-center justify-center rounded-full border border-border"
            >
              <Ionicons
                name={isCameraOn ? "videocam" : "videocam-outline"}
                size={18}
                color={colors.neutral.textPrimary}
              />
            </TouchableOpacity>

            <View className="h-10 w-10 items-center justify-center rounded-full border border-border">
              <Text className="body-small font-poppins-semibold!">{callSeconds}</Text>
            </View>

            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={isSpeakerOn ? "Turn speaker off" : "Turn speaker on"}
              hitSlop={6}
              onPress={() => setIsSpeakerOn((prev) => !prev)}
              className="h-10 w-10 items-center justify-center rounded-full border border-border"
            >
              <Ionicons
                name={isSpeakerOn ? "headset" : "headset-outline"}
                size={18}
                color={colors.neutral.textPrimary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-1 px-6 pb-6 pt-4">
          <View className="flex-1 items-center justify-center overflow-hidden rounded-[32px] bg-bubble-peach pb-16 pt-6">
            <View className="absolute right-4 top-4 h-20 w-16 items-center justify-center rounded-2xl border-2 border-background bg-surface">
              <Ionicons name="person" size={26} color={colors.neutral.textSecondary} />
            </View>

            <Image source={images.mascotWelcome} contentFit="contain" style={styles.mascot} />
          </View>

          <View
            className="-mt-10 flex-row items-start rounded-2xl bg-background px-4 py-3"
            style={styles.bubbleShadow}
          >
            <View className="flex-1 pr-3">
              <Text className="heading-4">{phrase?.phrase}</Text>
              {subtitlesOn && phrase ? (
                <Text className="body-medium mt-0.5 text-text-secondary!">{phrase.translation}</Text>
              ) : null}
            </View>

            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Play phrase audio"
              hitSlop={6}
              className="h-9 w-9 items-center justify-center rounded-full bg-surface"
            >
              <Ionicons name="volume-high" size={18} color={colors.brand.deepPurple} />
            </TouchableOpacity>
          </View>

          <View className="mt-6 flex-row justify-between px-2">
            <ControlButton
              icon={isCameraOn ? "videocam" : "videocam-outline"}
              label="Camera"
              onPress={() => setIsCameraOn((prev) => !prev)}
            />
            <ControlButton
              icon={isMicOn ? "mic" : "mic-off-outline"}
              label="Mic"
              onPress={() => setIsMicOn((prev) => !prev)}
            />
            <ControlButton
              icon="language-outline"
              label="Subtitles"
              active={subtitlesOn}
              onPress={() => setSubtitlesOn((prev) => !prev)}
            />
            <ControlButton icon="call" label="End Call" tone="danger" rotate onPress={endCall} />
          </View>

          <View className="mt-6 flex-row rounded-2xl border border-border py-4">
            {FEEDBACK.map((item, index) => (
              <View
                key={item.label}
                className={`flex-1 items-center ${
                  index < FEEDBACK.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <Text className="body-small font-poppins-semibold! text-text-primary!">
                  {item.label}
                </Text>
                <Text className={`body-medium mt-1 font-poppins-semibold! ${item.className}`}>
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>

      <LessonTabBar />
    </View>
  );
}

type ControlButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  tone?: "default" | "danger";
  active?: boolean;
  rotate?: boolean;
};

/** One circular control in the bottom row (Camera / Mic / Subtitles / End Call). */
function ControlButton({ icon, label, onPress, tone = "default", active, rotate }: ControlButtonProps) {
  const isDanger = tone === "danger";
  const iconColor = isDanger
    ? colors.neutral.background
    : active
      ? colors.brand.deepPurple
      : colors.neutral.textPrimary;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={active !== undefined ? { selected: active } : undefined}
      activeOpacity={0.8}
      onPress={onPress}
      className="items-center"
    >
      <View
        className={`h-14 w-14 items-center justify-center rounded-full ${
          isDanger ? "bg-error" : active ? "bg-deep-purple/10" : "bg-surface"
        }`}
      >
        <Ionicons
          name={icon}
          size={22}
          color={iconColor}
          style={rotate ? { transform: [{ rotate: "135deg" }] } : undefined}
        />
      </View>
      <Text className="caption mt-1.5">{label}</Text>
    </TouchableOpacity>
  );
}

/** Static replica of CustomTabBar — tapping a tab here exits the call. */
function LessonTabBar() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ backgroundColor: colors.neutral.background }}>
      <View className="h-[64px] flex-row border-t border-border bg-background">
        {TABS.map((tab) => {
          const focused = tab.name === "learn";

          return (
            <TouchableOpacity
              key={tab.name}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={tab.label}
              activeOpacity={0.8}
              onPress={() => {
                if (!focused) router.replace(tab.href);
              }}
              className="flex-1 items-center justify-center"
            >
              {focused ? (
                <View className="h-12 w-12 items-center justify-center rounded-full bg-deep-purple">
                  <Ionicons name={tab.icon} size={22} color={colors.neutral.background} />
                </View>
              ) : (
                <>
                  <Ionicons
                    name={`${tab.icon}-outline` as keyof typeof Ionicons.glyphMap}
                    size={22}
                    color={colors.neutral.textSecondary}
                  />
                  <Text className="caption mt-1 text-text-secondary!">{tab.label}</Text>
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

/* expo-image's Image and RN shadows aren't interopped by NativeWind className
   on native — size/shadow them with StyleSheet instead (see LessonCard). */
const styles = StyleSheet.create({
  mascot: {
    width: 220,
    height: 220,
  },
  bubbleShadow: {
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
});
