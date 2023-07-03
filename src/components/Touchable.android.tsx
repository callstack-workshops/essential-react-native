import React from "react";
import { Pressable } from "react-native";
import { colors } from "../colors";
import { TouchableProps } from "../types";

export const Touchable = ({ children, onPress, style }: TouchableProps) => {
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
