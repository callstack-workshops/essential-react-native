import React from "react";
import { TouchableOpacity } from "react-native";

export const Touchable = (props) => (
  <TouchableOpacity activeOpacity={0.6} {...props} />
);
