import React, { useCallback, useMemo } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../colors";
import { Show } from "../types";
import { ShowItem } from "./ShowItem";

type Section = {
  title: string;
  data: Show[];
};

type ShowListProps = {
  sections: Section[];
  style?: StyleProp<ViewStyle>;
};

export const ShowList = ({ sections, style }: ShowListProps) => {
  const insets = useSafeAreaInsets();

  const keyExtractor = useCallback((item: Show) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }: { item: Show }) => (
      <ShowItem key={item.id} show={item} style={styles.showItem} />
    ),
    []
  );

  const renderSectionHeader = useCallback(
    ({ section: { title } }: { section: Section }) => (
      <Text style={styles.sectionTitle}>{title}</Text>
    ),
    []
  );

  const contentContainerStyle = useMemo(
    () => ({
      paddingBottom: insets.bottom + 16,
    }),
    [insets.bottom]
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      style={style}
      contentContainerStyle={contentContainerStyle}
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
});
