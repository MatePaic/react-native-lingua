import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackButton } from "@/components/BackButton";
import { LessonCard } from "@/components/LessonCard";
import { TabPlaceholder } from "@/components/TabPlaceholder";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { getLessonsByLanguage, getLessonsByUnit } from "@/data/lessons";
import { getUnitById } from "@/data/units";
import { posthog } from "@/lib/posthog";
import { useLanguageStore } from "@/store/language-store";

type LearnTab = "lessons" | "practice";

export default function Learn() {
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);
  const [activeTab, setActiveTab] = useState<LearnTab>("lessons");
  const [bookmarked, setBookmarked] = useState(false);

  if (!selectedLanguageId) {
    return null;
  }

  const languageLessons = getLessonsByLanguage(selectedLanguageId);
  const currentLesson =
    languageLessons.find((lesson) => lesson.status === "in-progress") ?? languageLessons[0];

  if (!currentLesson) {
    return (
      <TabPlaceholder title="Learn" description="Lessons for this language are coming soon." />
    );
  }

  const currentUnit = getUnitById(currentLesson.unitId);

  if (!currentUnit) {
    return <TabPlaceholder title="Learn" description="Lessons for this language are coming soon." />;
  }

  const unitLessons = getLessonsByUnit(currentUnit.id);
  const reachedCount = unitLessons.filter((lesson) => lesson.status !== "locked").length;

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <View className="flex-row items-start px-6 pt-4">
        <BackButton fallbackHref="/(tabs)/home" />

        <View className="ml-3 flex-1">
          <Text className="heading-3 font-poppins-semibold!" numberOfLines={1}>
            {currentUnit.title}
          </Text>
          <Text className="body-small mt-0.5">
            Unit {currentUnit.order} • {reachedCount} / {unitLessons.length} lessons
          </Text>
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={bookmarked ? "Remove bookmark" : "Bookmark unit"}
          hitSlop={8}
          onPress={() => setBookmarked((prev) => !prev)}
        >
          <Ionicons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={24}
            color={colors.brand.deepPurple}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: images.placeholders.unitCover(currentUnit.id) }}
          contentFit="cover"
          style={{ width: "100%", height: 190, borderRadius: 24 }}
        />

        <View className="mt-4 flex-row rounded-2xl bg-surface p-1">
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={{ selected: activeTab === "lessons" }}
            onPress={() => setActiveTab("lessons")}
            className={`flex-1 items-center rounded-xl py-2.5 ${
              activeTab === "lessons" ? "bg-background" : ""
            }`}
          >
            <Text
              className={`font-poppins-semibold text-body-md ${
                activeTab === "lessons" ? "text-deep-purple" : "text-text-secondary"
              }`}
            >
              Lessons
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={{ selected: activeTab === "practice" }}
            onPress={() => setActiveTab("practice")}
            className={`flex-1 items-center rounded-xl py-2.5 ${
              activeTab === "practice" ? "bg-background" : ""
            }`}
          >
            <Text
              className={`font-poppins-semibold text-body-md ${
                activeTab === "practice" ? "text-deep-purple" : "text-text-secondary"
              }`}
            >
              Practice
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-5">
          {activeTab === "lessons" ? (
            unitLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onPress={() => {
                  posthog?.capture("lesson_opened", {
                    language_id: selectedLanguageId,
                    unit_id: currentUnit.id,
                    lesson_id: lesson.id,
                    lesson_status: lesson.status,
                  });
                  router.push(`/lesson/${lesson.id}`);
                }}
              />
            ))
          ) : (
            <View className="items-center py-10">
              <Text className="body-medium text-center text-text-secondary!">
                Practice mode is coming soon.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
