import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../colors";
import { useFetchShows } from "../hooks/useFetchShows";
import { useSearchShows } from "../hooks/useSearchShows";
import { SearchBar } from "../components/SearchBar";
import { WatchedList } from "../components/WatchedList";

export const WatchedScreen = () => {
  const { shows: data, isLoading } = useFetchShows("watched");
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
      ) : (
        <WatchedList shows={shows} style={styles.list} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    marginTop: 8,
  },
});
