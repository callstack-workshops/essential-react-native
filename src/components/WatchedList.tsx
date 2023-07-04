import React, { useCallback } from "react";
import { FlatList, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Show } from "../types";
import { PosterItem } from "./PosterItem";

type WatchedListProps = {
  shows: Show[];
  style?: StyleProp<ViewStyle>;
};

export const WatchedList = ({ shows, style }: WatchedListProps) => {
  const keyExtractor = useCallback((item: Show) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }: { item: Show }) => (
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
