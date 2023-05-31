import React, { useCallback } from "react";
import { SectionList, StyleSheet, Text } from "react-native";
import { colors } from "../colors";
import { ShowItem } from "./ShowItem";

export const ShowList = ({ sections, style }) => {
  const keyExtractor = useCallback((item) => item.id, []);

  const renderItem = useCallback(
    ({ item }) => (
      <ShowItem key={item.id} show={item} style={styles.showItem} />
    ),
    []
  );

  const renderSectionHeader = useCallback(
    ({ section: { title } }) => (
      <Text style={styles.sectionTitle}>{title}</Text>
    ),
    []
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      style={style}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  showItem: {
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    backgroundColor: colors.grey200SemiTransparent,
    color: colors.blue500,
    paddingVertical: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: 16,
  },
});
