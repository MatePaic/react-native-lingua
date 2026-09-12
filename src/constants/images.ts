import mascotAuth from "@/assets/images/mascot-auth.png";
import mascotLogo from "@/assets/images/moscot-logo.png";
import mascotWelcome from "@/assets/images/mascot-welcome.png";

/**
 * Central place for every image used in the app.
 * Import from here instead of requiring assets inside screens/components.
 */
export const images = {
  mascotLogo,
  mascotWelcome,
  mascotAuth,
} as const;
