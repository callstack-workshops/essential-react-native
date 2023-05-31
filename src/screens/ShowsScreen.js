import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../colors";
import { useFetchShows } from "../hooks/useFetchShows";
import { useSearchShows } from "../hooks/useSearchShows";
import { SearchBar } from "../components/SearchBar";
import { ShowItem } from "../components/ShowItem";

export const ShowsScreen = () => {
  const { shows: data, isLoading } = useFetchShows("shows");
  const { shows, onSearchChange, value } = useSearchShows(data);

  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={onSearchChange}
        value={value}
        placeholder="Search shows..."
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.accent} animating size="large" />
        </View>
      ) : null}
      {shows.map((show) => (
        <ShowItem key={show.id} show={show} style={styles.showItem} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  showItem: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});
