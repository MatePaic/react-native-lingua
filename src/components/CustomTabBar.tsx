import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View, type LayoutChangeEvent } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
/**
 * expo-router bundles its own fork of `@react-navigation/bottom-tabs`
 * instead of depending on the standalone package, so `BottomTabBarProps`
 * has to come from its internal re-export rather than `@react-navigation/bottom-tabs`.
 */
import type { BottomTabBarProps } from "expo-router/build/layouts/Tabs";

import { colors } from "@/constants/theme";

const CIRCLE_SIZE = 48;

/** Ionicons name shared by a tab's active (filled) and inactive (outline) icon. */
const TAB_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  home: "home",
  learn: "book",
  "ai-teacher": "sparkles",
  chat: "chatbubble",
  profile: "person",
};

/**
 * Bottom tab bar matching the design's icon set, but with a custom active
 * state: the focused tab's icon sits inside a filled circle with no label,
 * while the rest show icon + label. The circle slides between tabs using
 * Reanimated.
 */
export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [barWidth, setBarWidth] = useState(0);
  const translateX = useSharedValue(0);
  const hasPositioned = useRef(false);

  const tabWidth = barWidth / state.routes.length;

  useEffect(() => {
    if (!tabWidth) return;

    const target = state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2;

    if (!hasPositioned.current) {
      translateX.value = target;
      hasPositioned.current = true;
    } else {
      translateX.value = withTiming(target, { duration: 220, easing: Easing.linear });
    }
  }, [state.index, tabWidth, translateX]);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleLayout = (event: LayoutChangeEvent) => {
    setBarWidth(event.nativeEvent.layout.width);
  };

  return (
    <SafeAreaView edges={["bottom"]} style={{ backgroundColor: colors.neutral.background }}>
      <View
        onLayout={handleLayout}
        className="h-[64px] flex-row border-t border-border bg-background"
      >
        {barWidth > 0 ? (
          <Animated.View
            pointerEvents="none"
            style={[
              circleStyle,
              {
                position: "absolute",
                top: (64 - CIRCLE_SIZE) / 2,
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
                borderRadius: CIRCLE_SIZE / 2,
                backgroundColor: colors.brand.deepPurple,
              },
            ]}
          />
        ) : null}

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined && typeof options.tabBarLabel === "string"
              ? options.tabBarLabel
              : (options.title ?? route.name);
          const focused = state.index === index;
          const iconName = TAB_ICONS[route.name] ?? "ellipse";

          const onPress = () => {
            const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={label}
              activeOpacity={0.8}
              onPress={onPress}
              className="flex-1 items-center justify-center"
            >
              <Ionicons
                name={focused ? iconName : (`${iconName}-outline` as keyof typeof Ionicons.glyphMap)}
                size={22}
                color={focused ? colors.neutral.background : colors.neutral.textSecondary}
              />

              {!focused ? (
                <Text className="caption mt-1 text-text-secondary!">{label}</Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
