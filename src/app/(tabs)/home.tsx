import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Platform, ScrollView, Text, TouchableOpacity, View, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { getLanguageById } from "@/data/languages";
import { getLessonsByLanguage } from "@/data/lessons";
import { getUnitById } from "@/data/units";
import { useLanguageStore } from "@/store/language-store";
import type { LanguageId } from "@/types/learning";

/** Local-language greeting shown next to the user's name. */
const GREETINGS: Record<LanguageId, string> = {
  spanish: "Hola",
  french: "Salut",
  japanese: "こんにちは",
  korean: "안녕",
  german: "Hallo",
  chinese: "你好",
  italian: "Ciao",
  portuguese: "Olá",
};

/** Rough CEFR level based on how far into the course a unit sits. */
const levelForUnit = (order: number) => (order <= 3 ? "A1" : order <= 6 ? "A2" : "B1");

/**
 * Same trick as `PrimaryButton`'s gradient: NativeWind's native CSS engine
 * can't resolve a `linear-gradient()` value on iOS/Android, so native gets
 * the gradient via React Native's own style prop while web keeps using the
 * `bg-brand-gradient` className (see the comment on that utility in
 * global.css).
 */
const nativeGradientStyle: ViewStyle | undefined =
  Platform.OS === "web"
    ? undefined
    : {
        experimental_backgroundImage: `linear-gradient(to right, ${colors.brand.deepPurple}, ${colors.brand.purpleLight})`,
      };

// Mock daily-progress numbers. There's no XP/streak store yet (see
// AGENTS.md — local XP and streaks are still on the roadmap), so these are
// placeholders until that state is tracked for real.
const DAILY_GOAL_XP = 20;
const EARNED_XP = 15;
const STREAK_DAYS = 12;

export default function Home() {
  const { user } = useUser();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);

  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : undefined;

  if (!selectedLanguageId || !language) {
    return null;
  }

  const languageLessons = getLessonsByLanguage(selectedLanguageId);
  const currentLesson =
    languageLessons.find((lesson) => lesson.status === "in-progress") ?? languageLessons[0];
  const currentUnit = currentLesson ? getUnitById(currentLesson.unitId) : undefined;

  const goalProgress = Math.min(EARNED_XP / DAILY_GOAL_XP, 1);
  const greeting = GREETINGS[selectedLanguageId];
  const firstName = user?.firstName ?? "there";

  const planItems = [
    {
      id: "lesson",
      icon: "book" as const,
      iconBackground: "bg-deep-purple",
      title: "Lesson",
      subtitle: currentLesson?.title ?? "Start your first lesson",
      done: currentLesson?.status === "completed",
    },
    {
      id: "conversation",
      icon: "headset" as const,
      iconBackground: "bg-deep-purple",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      done: false,
    },
    {
      id: "words",
      icon: "chatbubble-ellipses" as const,
      iconBackground: "bg-error",
      title: "New words",
      subtitle: `${currentLesson?.vocabulary.length ?? 0} words`,
      done: false,
    },
  ];

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center">
          <Image
            source={language.flag}
            contentFit="cover"
            style={{ width: 44, height: 44, borderRadius: 22 }}
          />
          <Text className="heading-4 ml-3 flex-1" numberOfLines={1}>
            {greeting}, {firstName}! 👋
          </Text>

          <View className="flex-row items-center">
            <Image source={images.streakFire} contentFit="contain" style={{ width: 22, height: 22 }} />
            <Text className="heading-4 ml-1 text-streak!">{STREAK_DAYS}</Text>
          </View>

          <TouchableOpacity accessibilityRole="button" accessibilityLabel="Notifications" className="ml-4">
            <Ionicons name="notifications-outline" size={24} color={colors.neutral.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Daily goal */}
        <View className="mt-5 flex-row items-center justify-between rounded-3xl bg-bubble-peach p-5">
          <View className="flex-1">
            <Text className="caption">Daily goal</Text>
            <View className="mt-1 flex-row items-end">
              <Text className="heading-2 text-text-primary!">{EARNED_XP}</Text>
              <Text className="body-medium mb-0.5 ml-1 text-text-secondary!">
                {" "}
                / {DAILY_GOAL_XP} XP
              </Text>
            </View>
            <View className="mt-3 h-2 w-full max-w-[180px] overflow-hidden rounded-full bg-background/70">
              <View
                className="h-full rounded-full bg-streak"
                style={{ width: `${goalProgress * 100}%` }}
              />
            </View>
          </View>

          <Image source={images.treasure} contentFit="contain" style={{ width: 84, height: 84 }} />
        </View>

        {/* Continue learning */}
        <View
          className="relative mt-4 overflow-hidden rounded-3xl bg-deep-purple"
          style={nativeGradientStyle}
        >
          <Image
            source={images.palace}
            contentFit="contain"
            pointerEvents="none"
            style={{ position: "absolute", right: -16, bottom: -12, width: 160, height: 160 }}
          />

          <View className="p-5">
            <Text className="body-medium text-background/80!">Continue learning</Text>
            <Text className="heading-2 mt-1 text-background!">{language.name}</Text>
            {currentUnit ? (
              <Text className="body-medium mt-0.5 text-background/80!">
                {levelForUnit(currentUnit.order)} • Unit {currentUnit.order}
              </Text>
            ) : null}

            <TouchableOpacity
              accessibilityRole="button"
              activeOpacity={0.9}
              onPress={() => router.push("/(tabs)/learn")}
              className="mt-4 self-start rounded-full bg-background px-6 py-2.5"
            >
              <Text className="font-poppins-semibold text-body-md text-deep-purple">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Today's plan */}
        <View className="mt-6 flex-row items-center justify-between">
          <Text className="heading-4">Today&apos;s plan</Text>
          <TouchableOpacity accessibilityRole="button" onPress={() => router.push("/(tabs)/learn")}>
            <Text className="body-small font-poppins-medium! text-deep-purple!">View all</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-3">
          {planItems.map((item) => (
            <View key={item.id} className="mb-3 flex-row items-center">
              <View
                className={`h-11 w-11 items-center justify-center rounded-2xl ${item.iconBackground}`}
              >
                <Ionicons name={item.icon} size={20} color={colors.neutral.background} />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-poppins-medium text-body-lg text-text-primary">
                  {item.title}
                </Text>
                <Text className="body-small mt-0.5">{item.subtitle}</Text>
              </View>

              {item.done ? (
                <View className="h-7 w-7 items-center justify-center rounded-full bg-deep-purple">
                  <Ionicons name="checkmark" size={16} color={colors.neutral.background} />
                </View>
              ) : (
                <View className="h-7 w-7 rounded-full border-2 border-border" />
              )}
            </View>
          ))}
        </View>

        {/* Next up */}
        <TouchableOpacity
          accessibilityRole="button"
          activeOpacity={0.85}
          onPress={() => router.push("/(tabs)/ai-teacher")}
          className="mt-4 flex-row items-center rounded-3xl bg-bubble-mint p-4"
        >
          <View className="flex-1">
            <Text className="caption">Next up</Text>
            <Text className="heading-4 mt-1">AI Video Call</Text>
            <Text className="body-small mt-0.5">Practice speaking</Text>
          </View>

          <View className="relative h-14 w-14">
            <Image
              source={{ uri: images.aiTeacherAvatar }}
              contentFit="cover"
              style={{ width: 56, height: 56, borderRadius: 28 }}
            />
            <View className="absolute -bottom-1 -right-1 h-6 w-6 items-center justify-center rounded-full bg-success">
              <Ionicons name="videocam" size={13} color={colors.neutral.background} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
