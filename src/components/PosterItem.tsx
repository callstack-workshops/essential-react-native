import React, { memo } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { posterHeight, posterWidth } from "../constants";
import { Show, WatchedScreenNavigationProp } from "../types";

type PosterItemProps = {
  show: Show;
  style?: StyleProp<ViewStyle>;
};

const _PosterItem = ({ show, style }: PosterItemProps) => {
  const { images } = show;
  const { navigate } = useNavigation<WatchedScreenNavigationProp>();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.6}
      onPress={() => navigate("Details", { show })}
    >
      <View style={[styles.container, style]}>
        <Image
          source={{ uri: images.mobile }}
          style={styles.image}
          accessibilityIgnoresInvertColors
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: posterWidth,
    height: posterHeight,
  },
});

export const PosterItem = memo(_PosterItem);
