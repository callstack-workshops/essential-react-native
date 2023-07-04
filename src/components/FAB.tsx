import React from "react";
import { Animated, StyleSheet, StyleProp, ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../colors";
import { Touchable } from "./Touchable";

export type AnimatedTransformStyle = {
  transform: [{ translateY: Animated.AnimatedInterpolation<string | number> }];
};

type FABProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle> | AnimatedTransformStyle;
};

export const FAB = ({ onPress, style }: FABProps) => {
  return (
    <Animated.View style={style}>
      <Touchable
        accessibilityRole="button"
        onPress={onPress}
        style={styles.container}
      >
        <Ionicons name="ios-add" size={24} />
      </Touchable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: colors.accent,
    height: 56,
    width: 56,
    borderRadius: 56,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
