import { useRef } from "react";
import { Animated } from "react-native";

export const useAnimatedValue = (initialValue: number): Animated.Value => {
  const value = useRef<Animated.Value | null>(null);

  if (!value.current) {
    value.current = new Animated.Value(initialValue);
  }

  return value.current;
};
