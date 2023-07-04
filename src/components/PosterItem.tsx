import React, { memo } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Show, WatchedScreenNavigationProp } from "../types";

type PosterItemProps = {
  show: Show;
  style?: StyleProp<ViewStyle>;
};

const _PosterItem = ({ show, style }: PosterItemProps) => {
  const { images } = show;
  const { navigate } = useNavigation<WatchedScreenNavigationProp>();
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.6}
      onPress={() => navigate("Details", { show })}
    >
      <View style={[styles.container, style]}>
        <Image
          source={{ uri: images.mobile }}
          style={{ width: width / 3 - 12, height: width / 2 }}
          accessibilityIgnoresInvertColors
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export const PosterItem = memo(_PosterItem);
