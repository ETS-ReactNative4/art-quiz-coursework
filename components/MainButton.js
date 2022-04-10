import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

import Colors from "../constants/Colors";

const MainButton = (props) => {
  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={styles.container}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "45%",
    marginHorizontal: 10,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 15,
    elevation: 5,
  },
  button: {
    // flex: 1,
    marginVertical: 12,
    marginHorizontal: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 19,
    textAlign: "center",
  },
});

export default MainButton;
