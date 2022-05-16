import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/firebase-config";

import Colors from "../constants/Colors";

function HomeCategoryItem({ title, categoryScreen, id }) {
  const navigation = useNavigation();

  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://github.com/VeronikaBogdan/art-quiz-coursework/blob/main/assets/art-1.png?raw=true"
  );

  useEffect(() => {
    async function fetchMyAPI() {
      const quizesCol = collection(db, "quizes");
      const quizesSnapshot = await getDocs(quizesCol);
      const quizesList = quizesSnapshot.docs.map((doc) => doc.data());

      // console.log(quizesList);

      setSelectedQuiz(quizesList[id].category);
      setImageUrl(quizesList[id].categoryUrl);
    }

    fetchMyAPI();
  }, []);

  function selectQuizItemHadler() {
    navigation.navigate(categoryScreen, {
      quizTitle: selectedQuiz,
      categoryScreen: categoryScreen,
      // keyScore: key,
    });
  }

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
          source={{ uri: imageUrl }}
          resizeMethod="resize"
        />
        <Text style={styles.title}>{selectedQuiz}</Text>
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
