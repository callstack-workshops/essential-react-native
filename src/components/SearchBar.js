import React, { useCallback } from "react";
import { View, TextInput, Text, Pressable } from "react-native";

export const SearchBar = ({ onChangeText, value }) => {
  const onCancel = useCallback(() => {
    onChangeText("");
  }, [onChangeText]);

  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder="Search shows..."
      />
      <Pressable onPress={onCancel}>
        <Text>Cancel</Text>
      </Pressable>
    </View>
  );
};
