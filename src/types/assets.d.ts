/**
 * Metro turns image imports into asset references (a number at runtime),
 * which both `react-native`'s Image and `expo-image` accept as a source.
 */
declare module "*.png" {
  const asset: number;
  export default asset;
}

declare module "*.jpg" {
  const asset: number;
  export default asset;
}

declare module "*.svg" {
  const asset: number;
  export default asset;
}
