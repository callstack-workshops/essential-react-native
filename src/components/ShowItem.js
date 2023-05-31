import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getStarsRating } from "../utils";
import { Touchable } from "./Touchable";

const _ShowItem = ({ show, style }) => {
  const { name, year, images, voteAverage } = show;
  const { navigate } = useNavigation();

  return (
    <Touchable onPress={() => navigate("Details", { show })}>
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
    </Touchable>
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
    flexShrink: 1,
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

export const ShowItem = memo(_ShowItem);
