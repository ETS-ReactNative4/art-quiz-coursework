import { Text, Pressable, View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

function MyButton({ title, onPressProp }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPressProp}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    // flex: 1,
    margin: 14,
    height: 50,
    marginHorizontal: 100,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: Colors.primary,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.6,
  },
  innerContainer: {
    // flex: 1,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
