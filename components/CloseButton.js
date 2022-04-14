import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function CloseButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.5}
      style={{ ...styles.buttonContainer, ...props.style }}
    >
      <View>
        <AntDesign name="close" size={35} color="black" />
      </View>
    </TouchableOpacity>
  );
}

export default CloseButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
});
