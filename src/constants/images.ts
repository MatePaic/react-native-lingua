import authSparkles from "@/assets/images/auth-sparkles.svg";
import earth from "@/assets/images/earth.png";
import flagChinese from "@/assets/images/flags/chinese.png";
import flagFrench from "@/assets/images/flags/french.png";
import flagGerman from "@/assets/images/flags/german.png";
import flagItalian from "@/assets/images/flags/italian.png";
import flagJapanese from "@/assets/images/flags/japanese.png";
import flagKorean from "@/assets/images/flags/korean.png";
import flagPortuguese from "@/assets/images/flags/portuguese.png";
import flagSpanish from "@/assets/images/flags/spanish.png";
import iconEye from "@/assets/images/icon-eye.svg";
import iconEyeOff from "@/assets/images/icon-eye-off.svg";
import mascotAuth from "@/assets/images/mascot-auth.png";
import mascotLogo from "@/assets/images/moscot-logo.png";
import mascotWelcome from "@/assets/images/mascot-welcome.png";
import palace from "@/assets/images/palace.png";
import socialApple from "@/assets/images/social-apple.svg";
import socialFacebook from "@/assets/images/social-facebook.svg";
import socialGoogle from "@/assets/images/social-google.svg";
import streakFire from "@/assets/images/streak-fire.png";
import treasure from "@/assets/images/treasure.png";
import type { LanguageId } from "@/types/learning";

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
  earth,
  palace,
  treasure,
  streakFire,
  /**
   * No bundled illustration for the AI teacher yet, so this hotlinks a
   * portrait from Unsplash as a placeholder (see AGENTS.md's Image Rule).
   */
  aiTeacherAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  /**
   * Bundled locally instead of hotlinked from a flag CDN so the language
   * selection screen never shows blank flags on a slow or restricted
   * network (see the flagcdn.com issue on a real device).
   */
  flags: {
    spanish: flagSpanish,
    french: flagFrench,
    japanese: flagJapanese,
    korean: flagKorean,
    german: flagGerman,
    chinese: flagChinese,
    italian: flagItalian,
    portuguese: flagPortuguese,
  } satisfies Record<LanguageId, number>,
} as const;
