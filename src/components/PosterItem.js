import React, { memo } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { posterHeight, posterWidth } from "../constants";

const _PosterItem = ({ show, style }) => {
  const { images } = show;
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
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
