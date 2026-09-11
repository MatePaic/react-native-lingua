import { Text, View } from "react-native";

type BubbleTone = "blue" | "purple" | "peach";

/**
 * Each tone pairs the bubble background with the tail color (the tail is a
 * CSS-style triangle, so it needs the same color on its top border) and the
 * text color used inside the bubble.
 */
const TONES: Record<BubbleTone, { bubble: string; tail: string; text: string }> = {
  blue: {
    bubble: "bg-bubble-blue",
    tail: "border-t-bubble-blue",
    text: "text-text-primary!",
  },
  purple: {
    bubble: "bg-bubble-purple",
    tail: "border-t-bubble-purple",
    text: "text-deep-purple!",
  },
  peach: {
    bubble: "bg-bubble-peach",
    tail: "border-t-bubble-peach",
    text: "text-error!",
  },
};

type SpeechBubbleProps = {
  label: string;
  tone: BubbleTone;
  /** Which bottom corner the little tail points out of. */
  tail: "left" | "right";
  /** Position + rotation of the bubble, e.g. "left-[10%] top-[7%] -rotate-[8deg]". */
  className?: string;
};

export function SpeechBubble({ label, tone, tail, className = "" }: SpeechBubbleProps) {
  const colors = TONES[tone];

  return (
    <View className={`absolute rounded-xl px-4 py-2 ${colors.bubble} ${className}`}>
      <Text className={`heading-3 ${colors.text}`}>{label}</Text>

      {/* Tail: a border triangle that hangs under the bubble. */}
      <View
        className={`absolute -bottom-[13px] h-0 w-0 border-t-[14px] ${colors.tail} ${
          tail === "left"
            ? "left-5 border-r-[12px] border-r-transparent"
            : "right-5 border-l-[12px] border-l-transparent"
        }`}
      />
    </View>
  );
}
