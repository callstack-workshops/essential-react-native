import React, { useCallback, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Animated,
  Alert,
} from "react-native";
import { useAnimatedValue } from "../hooks/useAnimatedValue";
import { Show } from "../types";
import { PosterItem } from "./PosterItem";
import { FAB } from "./FAB";

type WatchedListProps = {
  shows: Show[];
  style?: StyleProp<ViewStyle>;
};

export const WatchedList = ({ shows, style }: WatchedListProps) => {
  const animatedTranslateY = useAnimatedValue(1);
  const isFabVisible = useRef(false);
  const keyExtractor = useCallback((item: Show) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }: { item: Show }) => (
      <PosterItem key={item.id} show={item} style={styles.posterItem} />
    ),
    [],
  );

  const animateFab = useCallback(
    (toValue: number) => {
      isFabVisible.current = false;
      Animated.timing(animatedTranslateY, {
        toValue,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        if (toValue === 1) {
          isFabVisible.current = true;
        }
      });
    },
    [animatedTranslateY],
  );

  const onFabPress = useCallback(() => {
    if (isFabVisible.current) {
      Alert.alert("Feature not yet implemented!");
    }
  }, []);

  const onScrollBeginDrag = useCallback(() => {
    animateFab(0);
  }, [animateFab]);

  const onScrollEndDrag = useCallback(() => {
    const timer = setTimeout(() => animateFab(1), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [animateFab]);

  return (
    <>
      <FlatList
        data={shows}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        style={style}
        contentContainerStyle={styles.contentContainer}
        keyboardDismissMode="on-drag"
        numColumns={3}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
      />
      <FAB
        onPress={onFabPress}
        style={{
          transform: [
            {
              translateY: animatedTranslateY.interpolate({
                inputRange: [0, 1],
                outputRange: [56 + 16, 1],
              }),
            },
          ],
        }}
      />
    </>
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
