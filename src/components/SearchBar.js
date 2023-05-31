import React, { useCallback } from "react";
import { Keyboard, View, TextInput, Text, StyleSheet } from "react-native";
import { Touchable } from "../components/Touchable";
import { colors } from "../colors";

export const SearchBar = ({ onChangeText, value }) => {
  const onCancel = useCallback(() => {
    onChangeText("");
    Keyboard.dismiss();
  }, [onChangeText]);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder="Search shows..."
        style={styles.textInput}
      />
      <Touchable onPress={onCancel} style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.grey200,
    borderRadius: 8,
    marginLeft: 16,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  cancelButton: {
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  cancelText: {
    color: colors.blue500,
    fontSize: 18,
  },
});
