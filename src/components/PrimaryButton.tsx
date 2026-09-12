import { Text, TouchableOpacity, View } from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  className?: string;
};

/**
 * App-wide call to action: full width, 64px tall, label centered in the space
 * left of the chevron.
 */
export function PrimaryButton({ label, onPress, className = "" }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.9}
      onPress={onPress}
      className={`h-16 flex-row items-center rounded-2xl bg-deep-purple px-7 ${className}`}
    >
      <Text className="flex-1 text-center font-poppins-semibold text-h4 text-background">
        {label}
      </Text>

      {/* Chevron: a square with two borders, rotated 45°. */}
      <View className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-background" />
    </TouchableOpacity>
  );
}
