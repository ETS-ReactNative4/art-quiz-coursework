import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";

function CategoryGridTitle({
  title,
  color,
  image,
  onPressProp,
  mainCategory,
  style,
}) {
  const navigation = useNavigation();

  // const mainCategory = route.params.categoryScreen;

  // function selectQuizItemHadler() {
  //   navigation.navigate("QuestionsScreen", {
  //     quizTitle: title,
  //     mainCategory: mainCategory,
  //   });
  // }

  return (
    <View style={[styles.gridItem, style]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        // onPress={selectQuizItemHadler}
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
    textAlign: "center",
  },
  image: {
    // width: 170,
    // height: 170,
    // borderBottomRightRadius: 0,
    // borderBottomLeftRadius: 8,
  },
});
