import { Platform, Text, TouchableOpacity, View, type ViewStyle } from "react-native";

import { colors } from "@/constants/theme";

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  /** Auth screens use the purple gradient, onboarding the flat deep purple. */
  gradient?: boolean;
  /** The onboarding CTA ends with a chevron, the auth CTAs don't. */
  showChevron?: boolean;
  disabled?: boolean;
  className?: string;
};

/**
 * Native-only replacement for the `bg-brand-gradient` className (see
 * global.css). NativeWind's native CSS engine can't resolve a
 * `linear-gradient()` value on iOS/Android and crashes, so instead of a
 * className we set React Native's own `experimental_backgroundImage` style
 * directly — RN's native code already knows how to paint a real gradient
 * from this shape. `undefined` on web is intentional: web keeps using the
 * `bg-brand-gradient` className, which already renders correctly there.
 */
const nativeGradientStyle: ViewStyle | undefined =
  Platform.OS === "web"
    ? undefined
    : {
        experimental_backgroundImage: `linear-gradient(to right, ${colors.brand.deepPurple}, ${colors.brand.purpleLight})`,
      };

/**
 * App-wide call to action: full width, 64px tall, label centered in the space
 * left of the chevron.
 */
export function PrimaryButton({
  label,
  onPress,
  gradient = false,
  showChevron = true,
  disabled = false,
  className = "",
}: PrimaryButtonProps) {
  // `bg-brand-gradient` must never reach native — NativeWind crashes just
  // evaluating it there (see the comment on `nativeGradientStyle`). So the
  // className only carries the gradient look on web; native gets it from
  // the `style` prop below instead, layered on the solid `bg-deep-purple`
  // className underneath it.
  const backgroundClassName =
    gradient && Platform.OS === "web" ? "bg-brand-gradient" : "bg-deep-purple";

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled}
      style={gradient ? nativeGradientStyle : undefined}
      className={`h-16 flex-row items-center rounded-2xl px-7 ${backgroundClassName} ${disabled ? "opacity-60" : ""} ${className}`}
    >
      <Text className="flex-1 text-center font-poppins-semibold text-h4 text-background">
        {label}
      </Text>

      {/* Chevron: a square with two borders, rotated 45°. */}
      {showChevron ? (
        <View className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-background" />
      ) : null}
    </TouchableOpacity>
  );
}
