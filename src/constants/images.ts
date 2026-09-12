import authSparkles from "@/assets/images/auth-sparkles.svg";
import iconEye from "@/assets/images/icon-eye.svg";
import iconEyeOff from "@/assets/images/icon-eye-off.svg";
import mascotAuth from "@/assets/images/mascot-auth.png";
import mascotLogo from "@/assets/images/moscot-logo.png";
import mascotWelcome from "@/assets/images/mascot-welcome.png";
import socialApple from "@/assets/images/social-apple.svg";
import socialFacebook from "@/assets/images/social-facebook.svg";
import socialGoogle from "@/assets/images/social-google.svg";

/**
 * Central place for every image used in the app.
 * Import from here instead of requiring assets inside screens/components.
 */
export const images = {
  mascotLogo,
  mascotWelcome,
  mascotAuth,
  authSparkles,
  iconEye,
  iconEyeOff,
  socialGoogle,
  socialFacebook,
  socialApple,
} as const;
