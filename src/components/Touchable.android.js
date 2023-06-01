import React from "react";
import { Pressable } from "react-native";
import { colors } from "../colors";

export const Touchable = ({ children, onPress, style }) => {
  return (
    <Pressable
      accessibilityRole="button"
      android_ripple={{ color: colors.ripple }}
      onPress={onPress}
      style={style}
    >
      {children}
    </Pressable>
  );
};
