/**
 * Mirrors the type scale defined in `src/global.css`.
 * Use these only where NativeWind `className` isn't available
 * (see the Style Exception Rules in AGENTS.md).
 */
export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const typography = {
  h1: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 32 * 1.2 },
  h2: { fontFamily: fonts.semiBold, fontSize: 24, lineHeight: 24 * 1.3 },
  h3: { fontFamily: fonts.semiBold, fontSize: 20, lineHeight: 20 * 1.3 },
  h4: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 16 * 1.4 },
  bodyLarge: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 16 * 1.6 },
  bodyMedium: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 14 * 1.6 },
  bodySmall: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 13 * 1.6 },
  caption: { fontFamily: fonts.regular, fontSize: 11, lineHeight: 11 * 1.4 },
} as const;
