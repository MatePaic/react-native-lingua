import { Image } from "expo-image";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  type TextInputProps,
} from "react-native";

import { images } from "@/constants/images";
import { colors, fonts } from "@/constants/theme";

type AuthTextFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  /** Masks the value and shows the eye toggle on the right. */
  secure?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  autoComplete?: TextInputProps["autoComplete"];
};

/**
 * Bordered card with the field name above the input, as in the auth design.
 */
export function AuthTextField({
  label,
  value,
  onChangeText,
  placeholder,
  secure = false,
  keyboardType,
  autoComplete,
}: AuthTextFieldProps) {
  const [isHidden, setIsHidden] = useState(secure);

  return (
    <View className="flex-row items-center rounded-2xl border border-border bg-background px-5 py-4">
      <View className="flex-1">
        <Text className="body-small">{label}</Text>

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          accessibilityLabel={label}
          accessibilityHint={placeholder}
          placeholderTextColor={colors.neutral.textSecondary}
          secureTextEntry={isHidden}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
      </View>

      {secure ? (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={isHidden ? "Show password" : "Hide password"}
          activeOpacity={0.7}
          hitSlop={12}
          onPress={() => setIsHidden((hidden) => !hidden)}
        >
          <Image
            source={isHidden ? images.iconEye : images.iconEyeOff}
            contentFit="contain"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

/* TextInput keeps its own styles: className does not cover input-only props,
   and Android adds padding of its own that has to be zeroed out. */
const styles = StyleSheet.create({
  input: {
    marginTop: 4,
    padding: 0,
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.neutral.textPrimary,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});
