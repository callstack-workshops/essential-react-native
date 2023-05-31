import React, { memo } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const _PosterItem = ({ show, style }) => {
  const { images } = show;
  const { navigate } = useNavigation();
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigate("Details", { show })}
    >
      <View style={[styles.container, style]}>
        <Image
          source={{ uri: images.mobile }}
          style={[styles.image, { width: width / 3 - 12, height: width / 2 }]}
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
