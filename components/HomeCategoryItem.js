import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import { QUIZES } from "../data/dummy-data";

function HomeCategoryItem({ title, categoryScreen }) {
  const navigation = useNavigation();

  function selectQuizItemHadler() {
    navigation.navigate(categoryScreen, {
      quizTitle: title,
      categoryScreen: categoryScreen,
      // keyScore: key,
    });
  }

  const selectedQuiz = QUIZES.find((quiz) => quiz.category === title);

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectQuizItemHadler}
      >
        <Image
          style={styles.image}
          source={{ uri: selectedQuiz.categoryUrl }}
          resizeMethod="resize"
        />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default HomeCategoryItem;

const styles = StyleSheet.create({
  container: {
    // width: "60%",
    height: Dimensions.get("window").height / 3 - 10,
    marginHorizontal: 60,
    marginVertical: 15,
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 15,
  },
  image: {
    width: 160,
    height: Dimensions.get("window").height / 3 - 100,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row-reverse",
    // padding: 2,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: Colors.primary,
    textAlign: "center",
    marginTop: 10,
  },
});
