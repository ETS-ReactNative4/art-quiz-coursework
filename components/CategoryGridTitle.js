import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import Colors from "../constants/Colors";

function CategoryGridTitle({ title, color, image, onPressProp }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressProp}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.image} resizeMode="contain" source={image} />
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 14,
    // height: 150,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "white", //! for iOS
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  innerContainer: {
    flex: 1,
    // padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 7,
  },
  image: {
    width: 170,
    height: 170,
    // borderBottomRightRadius: 0,
    // borderBottomLeftRadius: 8,
  },
});
