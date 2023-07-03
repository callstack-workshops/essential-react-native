import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";
import { useFetchShows } from "../hooks/useFetchShows";
import { useSearchShows } from "../hooks/useSearchShows";
import { SearchBar } from "../components/SearchBar";
import { getStarsRating } from "../utils";
import { Show } from "../types";

export const ShowsScreen = () => {
  const { shows: data, isLoading } = useFetchShows("shows");
  const { shows, onSearchChange, value } = useSearchShows(data);

  return (
    <View style={styles.container}>
      <SearchBar onChangeText={onSearchChange} value={value} />
      {isLoading ? (
        <ActivityIndicator color={colors.accent} animating size="large" />
      ) : null}
      {shows.map(({ id, name, year, images, voteAverage }: Show) => (
        <View key={id}>
          <Image
            source={{ uri: images.mobile }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 92.6,
              height: 139,
            }}
            accessibilityIgnoresInvertColors
          />
          <Text>{name}</Text>
          <Text>{year}</Text>
          <Text>{getStarsRating(voteAverage)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
