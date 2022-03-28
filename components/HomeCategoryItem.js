import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import { QUIZES } from "../data/dummy-data";

function HomeCategoryItem({ title }) {
  const selectedQuiz = QUIZES.find((quiz, index) => quiz.id === index);

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        // onPress={onPressProp}
      >
        <Image
          style={styles.image}
          source={{ uri: selectedQuiz.categoryUrl }}
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
    marginHorizontal: 80,
    marginVertical: 10,
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 15,
  },
  image: {
    width: 175,
    height: 220,
  },
  button: {
    padding: 22,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: Colors.primary,
    textAlign: "center",
    marginTop: 20,
  },
});
