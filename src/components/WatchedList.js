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
      keyboardDismissMode="on-drag"
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  posterItem: {
    paddingBottom: 4,
    paddingRight: 4,
  },
  contentContainer: {
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
});
