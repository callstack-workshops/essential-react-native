import React, { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import { PosterItem } from "./PosterItem";

export const WatchedList = ({ shows, style }) => {
  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }) => (
      <PosterItem key={item.id} show={item} style={styles.posterItem} />
    ),
    []
  );

  return (
    <FlatList
      data={shows}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={style}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  posterItem: {
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: 16,
  },
});
