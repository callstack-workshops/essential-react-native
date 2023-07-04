import React from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../colors";
import { backdropHeight, posterHeight, posterWidth } from "../constants";
import { DetailsScreenRouteProp } from "../types";

type DetailsScreenProps = {
  route: DetailsScreenRouteProp;
};

export const DetailsScreen = ({ route }: DetailsScreenProps) => {
  const insets = useSafeAreaInsets();
  const { name, year, images, voteAverage, overview } = route.params.show;
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}>
      <View>
        <Image
          source={{ uri: images.backdrop }}
          style={[styles.backdrop, { width }]}
          accessibilityIgnoresInvertColors
        />
        <Image
          source={{ uri: images.mobile }}
          style={styles.poster}
          accessibilityIgnoresInvertColors
        />
        <View style={styles.topContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textHeader}>User score</Text>
          <Text style={styles.voteAverage}>{`${voteAverage}/10`}</Text>
          <Text style={styles.textHeader}>Overview</Text>
          <Text style={styles.overview}>{overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    height: backdropHeight,
  },
  poster: {
    position: "absolute",
    top: backdropHeight - posterHeight / 3,
    left: 16,
    width: posterWidth,
    height: posterHeight,
    borderWidth: 3,
    borderColor: colors.background,
  },
  topContent: {
    position: "absolute",
    top: backdropHeight,
    marginLeft: posterWidth + 32,
    marginTop: 16,
  },
  content: {
    paddingHorizontal: 16,
    marginTop: posterHeight - posterHeight / 3,
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
  textHeader: {
    fontWeight: "500",
    marginTop: 16,
    marginBottom: 8,
  },
  overview: {
    lineHeight: 24,
  },
});
