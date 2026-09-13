import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import type { Lesson } from "@/types/learning";

type LessonCardProps = {
  lesson: Lesson;
  onPress: () => void;
};

/** Number of vocab/phrase/activity items packed into a lesson, shown as its step count. */
const stepCount = (lesson: Lesson) =>
  lesson.vocabulary.length + lesson.phrases.length + lesson.activities.length;

/**
 * A single row on the Learn screen's lesson list. Completed lessons show a
 * checkmark, the in-progress lesson is outlined and shows its own thumbnail,
 * and the rest show a lock — mirroring the design's three lesson states.
 */
export function LessonCard({ lesson, onPress }: LessonCardProps) {
  const isInProgress = lesson.status === "in-progress";
  const isCompleted = lesson.status === "completed";
  const isLocked = lesson.status === "locked";

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={lesson.title}
      activeOpacity={0.8}
      onPress={onPress}
      className={`mb-3 flex-row items-center rounded-2xl border px-4 py-4 ${
        isInProgress ? "border-2 border-deep-purple bg-deep-purple/5" : "border-border"
      }`}
    >
      <View className="flex-1 pr-3">
        <Text className={`body-small font-poppins-medium! ${isInProgress ? "text-deep-purple!" : ""}`}>
          Lesson {lesson.order}
        </Text>
        <Text
          className={`mt-0.5 font-poppins-semibold text-h4 ${
            isLocked ? "text-text-secondary" : "text-text-primary"
          }`}
        >
          {lesson.title}
        </Text>

        {isInProgress ? (
          <Text className="body-small mt-0.5 font-poppins-medium! text-deep-purple!">In progress</Text>
        ) : null}
        {isLocked ? <Text className="body-small mt-0.5">0/{stepCount(lesson)} lessons</Text> : null}
      </View>

      {isCompleted ? (
        <View className="h-9 w-9 items-center justify-center rounded-full bg-success">
          <Ionicons name="checkmark" size={18} color={colors.neutral.background} />
        </View>
      ) : null}

      {isInProgress ? (
        <Image
          source={{ uri: images.placeholders.lessonThumbnail(lesson.id) }}
          contentFit="cover"
          style={styles.thumbnail}
        />
      ) : null}

      {isLocked ? <Ionicons name="lock-closed" size={20} color={colors.neutral.textSecondary} /> : null}
    </TouchableOpacity>
  );
}

/* expo-image's Image isn't interopped by NativeWind, so className is silently
   dropped on native — size it with StyleSheet instead (see LanguageCard). */
const styles = StyleSheet.create({
  thumbnail: {
    width: 44,
    height: 44,
    borderRadius: 12,
  },
});
