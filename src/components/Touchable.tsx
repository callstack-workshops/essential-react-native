import React from "react";
import { TouchableOpacity } from "react-native";
import { TouchableProps } from "../types";

export const Touchable = (props: TouchableProps) => (
  <TouchableOpacity activeOpacity={0.6} {...props} accessibilityRole="button" />
);
