import React from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { getStarsRating } from "../utils";
import { Show } from "../types";

type ShowItemProps = {
  show: Show;
  style?: StyleProp<ViewStyle>;
};

export const ShowItem = ({ show, style }: ShowItemProps) => {
  const { name, year, images, voteAverage } = show;
  return (
    <View style={[styles.container, style]}>
      <Image
        source={{ uri: images.mobile }}
        style={styles.image}
        accessibilityIgnoresInvertColors
      />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.voteAverage}>{getStarsRating(voteAverage)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 92.6,
    height: 139,
  },
  content: {
    marginLeft: 16,
    marginTop: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
  },
  year: {
    fontSize: 16,
    marginTop: 8,
  },
  voteAverage: {
    marginTop: 8,
  },
});
