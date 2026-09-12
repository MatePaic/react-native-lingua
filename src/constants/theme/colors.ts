/**
 * Mirrors the color tokens defined in `src/global.css`.
 * Use these only where NativeWind `className` isn't available
 * (see the Style Exception Rules in AGENTS.md — e.g. SafeAreaView,
 * Modal, StyleSheet-based shadows).
 */
export const colors = {
  brand: {
    purple: "#6C4EF5",
    deepPurple: "#5B3BF6",
    purpleLight: "#7B5CF3",
    blue: "#4D8BFF",
    green: "#21C16B",
  },
  semantic: {
    success: "#21C16B",
    warning: "#FFC800",
    streak: "#FF8A00",
    error: "#FF4D4F",
    info: "#4D8BFF",
  },
  neutral: {
    textPrimary: "#0D132B",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    surface: "#F6F7FB",
    background: "#FFFFFF",
  },
} as const;
