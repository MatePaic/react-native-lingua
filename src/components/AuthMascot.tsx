import { Image } from "expo-image";
import { View } from "react-native";

import { images } from "@/constants/images";

/** Square the mascot artwork is drawn in, sized so the head matches the design. */
const MASCOT_SIZE = 206;
/** How far the form below is pulled up over the mascot. */
const OVERLAP = 47;
/** The twinkles reach a little wider than the mascot itself. */
const SPARKLES_OVERHANG = 24;

/**
 * The waving fox that peeks out from behind the auth form. The artwork faces
 * right, so it is mirrored to match the design, and the negative bottom margin
 * lets the email field overlap the fox's chest.
 */
export function AuthMascot() {
  return (
    <View className="-mt-2 items-center" style={{ marginBottom: -OVERLAP }}>
      <View style={{ width: MASCOT_SIZE, height: MASCOT_SIZE }}>
        <Image
          source={images.mascotAuth}
          contentFit="contain"
          style={{
            width: MASCOT_SIZE,
            height: MASCOT_SIZE,
            transform: [{ scaleX: -1 }],
          }}
        />

        <Image
          source={images.authSparkles}
          contentFit="contain"
          pointerEvents="none"
          style={{
            position: "absolute",
            left: -SPARKLES_OVERHANG,
            top: 0,
            width: MASCOT_SIZE + SPARKLES_OVERHANG * 2,
            height: MASCOT_SIZE,
          }}
        />
      </View>
    </View>
  );
}
