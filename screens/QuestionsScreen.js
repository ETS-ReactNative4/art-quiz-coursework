import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import ArtistQuestionItem from "../components/ArtistQuestionItem";
import PictureInfoModal from "../components/pictureInfoModal";
import MyButton from "../components/MyButton";

function QuestionsScreen({ route, navigation }) {
  // const navigation = useNavigation();
  let [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  if (count === 10) count = 1;

  const headerTitle = route.params.quizTitle;
  const mainCategory = route.params.mainCategory;

  const selectedCategory = CATEGORIES.find(
    (item) => item.title === headerTitle
  );

  let questions = [];
  let rightAnswerNum = getRandomNum(1, 4);

  let arrOfAnswers = CATEGORIES.find((item) => {
    if (item.title === selectedCategory) {
      for (let i = 0; i < 4; i++) {
        let randNum = getRandomNum(0, 9);

        if (i == rightAnswerNum || count === randNum) {
          questions[i] = item.artistsQuiz[count];
        } else if (count !== randNum) {
          questions[i] = item.artistsQuiz[randNum];
        }
      }
    }
  });

  function getRandomNum(a, b) {
    let min = Math.ceil(a);
    let max = Math.ceil(b);
    return Math.round(Math.random() * (max - min)) + min;
  }

  const questionTitle =
    mainCategory === "ArtistsCategoriesScreen"
      ? "Which is " + selectedCategory.artistsQuiz[count].author + " picture?"
      : "Who is the author of this picture?";

  useLayoutEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation]);

  // let colorImg = selectedCategory;

  function name(params) {}

  return (
    <View>
      <Text style={styles.title}>{questionTitle}</Text>
      <Text style={{ color: "black" }}>
        {getRandomNum(0, 9)} qq {rightAnswerNum}
      </Text>
      <View style={styles.picturesContainer}>
        <ArtistQuestionItem
          num={count}
          category={selectedCategory.artistsQuiz[count]}
          // category={questions[0]}
          color={Colors.red}
          onPressProp={() => {
            setCount(count + 1);
          }}
        />
        <ArtistQuestionItem
          num={null}
          category={selectedCategory.artistsQuiz[getRandomNum(0, 9)]}
          color={Colors.red}
          onPressProp={() => setCount(count + 1)}
        />
        <ArtistQuestionItem
          num={null}
          category={selectedCategory.artistsQuiz[getRandomNum(0, 9)]}
          color={Colors.red}
          onPressProp={() => setCount(count + 1)}
        />
        <ArtistQuestionItem
          num={null}
          category={selectedCategory.artistsQuiz[getRandomNum(0, 9)]}
          color={Colors.red}
          onPressProp={() => setCount(count + 1)}
        />
      </View>
      <PictureInfoModal
        modalVisible={modalVisible}
        onPressProp={() => setModalVisible(true)}
      />
      <MyButton title="NEXT" onPressProp={() => setCount(count + 1)} />
    </View>
  );
}

export default QuestionsScreen;

const styles = StyleSheet.create({
  title: {
    width: "80%",
    height: 75,
    fontWeight: "500",
    fontSize: 26,
    color: Colors.primary,
    textAlign: "center",
    margin: 30,
  },
  picturesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: 350,
    marginHorizontal: 15,
  },
});
