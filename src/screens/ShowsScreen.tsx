import React, { useMemo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../colors";
import { useFetchShows } from "../hooks/useFetchShows";
import { useSearchShows } from "../hooks/useSearchShows";
import { SearchBar } from "../components/SearchBar";
import { getAlphabeticalSections } from "../utils";
import { ShowList } from "../components/ShowList";
import { storageShowsKey } from "../constants";

export const ShowsScreen = () => {
  const insets = useSafeAreaInsets();
  const { shows: data, isLoading } = useFetchShows("shows", storageShowsKey);
  const { shows, onSearchChange, value } = useSearchShows(data);
  const sections = useMemo(() => getAlphabeticalSections(shows), [shows]);

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16 }]}>
      <SearchBar onChangeText={onSearchChange} value={value} />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.accent} animating size="large" />
        </View>
      ) : (
        <ShowList sections={sections} style={styles.list} />
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
