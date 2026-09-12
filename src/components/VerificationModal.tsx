import { useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  /** Shown in the copy so the user knows where the code was sent. */
  email: string;
  onClose: () => void;
  /** Called as soon as the last digit is typed. */
  onVerified: () => void;
};

/**
 * Bottom sheet that asks for the 6-digit code we "emailed" the user. The boxes
 * are display only — a single hidden input holds the code, which is a lot
 * simpler than keeping six inputs and their refs in sync.
 */
export function VerificationModal({
  visible,
  email,
  onClose,
  onVerified,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digits);

    if (digits.length === CODE_LENGTH) {
      Keyboard.dismiss();
      onVerified();
    }
  };

  const handleShow = () => {
    setCode("");
    inputRef.current?.focus();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onShow={handleShow}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View className="rounded-t-3xl bg-background px-7 pb-10 pt-4">
          <View className="h-1 w-10 self-center rounded-full bg-border" />

          <Text className="heading-3 mt-6">Check your email</Text>
          <Text className="body-medium mt-2 text-text-secondary!">
            We sent a 6-digit verification code to {email.trim() || "your inbox"}. Enter
            it below to continue.
          </Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Enter verification code"
            className="mt-6 flex-row gap-2.5"
            onPress={() => inputRef.current?.focus()}
          >
            {Array.from({ length: CODE_LENGTH }).map((_, index) => (
              <View
                key={index}
                className={`h-14 flex-1 items-center justify-center rounded-2xl border ${
                  index === code.length
                    ? "border-deep-purple bg-surface"
                    : "border-border"
                }`}
              >
                <Text className="heading-3">{code[index] ?? ""}</Text>
              </View>
            ))}
          </Pressable>

          <Text className="caption mt-4 text-center">
            Didn&apos;t get it? Check your spam folder.
          </Text>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChangeText}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            textContentType="oneTimeCode"
            autoComplete="email-otp"
            caretHidden
            style={styles.hiddenInput}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

/* Modal, KeyboardAvoidingView and the off-screen input are all cases where
   className does not apply (see the style exceptions in AGENTS.md). */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(13, 19, 43, 0.45)",
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
});
