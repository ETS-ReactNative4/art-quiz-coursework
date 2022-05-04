import * as React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Vibration,
  StyleSheet,
} from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

import { CATEGORIES } from "../data/dummy-data";
import IMAGES from "../data/images";
import Colors from "../constants/Colors";

import ArtistQuestionItem from "../components/ArtistQuestionItem";
import PictureInfoModal from "../components/pictureInfoModal";
import GameEndModal from "../components/gameEndModal";
import MyButton from "../components/MyButton";
import MainButton from "../components/MainButton";

function QuestionsScreen({ route, navigation }) {
  const NAVIGATION = useNavigation();

  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEnd, setModalEnd] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [score, setScore] = useState(0);

  const headerTitle = route.params.quizTitle;
  const mainCategory = route.params.mainCategory;

  const selectedCategory = CATEGORIES.find(
    (item) => item.title === headerTitle
  );

  const rightAnswer = selectedCategory.artistsQuiz[count];
  const questionTitle =
    mainCategory === "ArtistsCategoriesScreen"
      ? "Which is " + rightAnswer.author + " picture?"
      : "Who is the author of this picture?";

  let answers = [
    rightAnswer.imageNum,
    getRandomNum(count + 1, 119),
    getRandomNum(count + 2, 119),
    getRandomNum(count + 3, 119),
  ];

  shake(answers);

  let dataAnswers = [
    IMAGES[answers[0]],
    IMAGES[answers[1]],
    IMAGES[answers[2]],
    IMAGES[answers[3]],
  ];

  function shake(arr) {
    return arr.sort((a, b) => Math.random() - 0.5);
  }

  function getRandomNum(a, b) {
    let min = Math.ceil(a);
    let max = Math.ceil(b);
    return Math.round(Math.random() * (max - min)) + min;
  }

  async function playSound(path) {
    const sound = new Audio.Sound();

    await sound.loadAsync(path);
    await sound.playAsync();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation]);

  function pressHandler(screen) {
    NAVIGATION.navigate(screen);
  }

  function renderCategoryItem(itemData) {
    if (mainCategory === "ArtistsCategoriesScreen")
      return (
        <ArtistQuestionItem
          num={itemData.item.name}
          imgNum={itemData.item.imageNum}
          color={Colors.green}
          onPressProp={() => {
            setSelectedAnswer(itemData.item.imageNum);
            setModalVisible(true);
            Vibration.vibrate(100);
          }}
        />
      );
    if (mainCategory === "PicturesCategoriesScreen")
      return (
        <MainButton
          onPress={() => {
            setSelectedAnswer(itemData.item.imageNum);
            setModalVisible(true);
            Vibration.vibrate(100);
            // selectedAnswer === rightAnswer.imageNum ? playSound() : null;
          }}
        >
          {itemData.item.author}
        </MainButton>
      );
    if (mainCategory === "MuseumCategoriesScreen")
      return <Text>museum item</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {count + 1}. {questionTitle}
      </Text>
      {mainCategory === "ArtistsCategoriesScreen" ? null : (
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/VeronikaBogdan/art-quiz-coursework/main/assets/img/${rightAnswer.imageNum}.jpg`,
          }}
          resizeMode="contain"
        />
      )}
      {mainCategory !== "MuseumCategoriesScreen" ? (
        <FlatList
          data={dataAnswers}
          keyExtractor={(item) => item.author}
          renderItem={renderCategoryItem.bind()}
          numColumns={2}
        />
      ) : null}
      {/* <FlatList
        data={dataAnswers}
        keyExtractor={(item) => item.author}
        renderItem={renderCategoryItem.bind()}
        numColumns={2}
      /> */}
      <Text style={[styles.score, { marginTop: 5 }]}>
        Current score: {score}
      </Text>
      <PictureInfoModal
        modalVisible={modalVisible}
        onPressProp={() => {
          // selectedAnswer === rightAnswer.imageNum ? setScore(score + 1) : null;
          if (selectedAnswer === rightAnswer.imageNum) {
            setScore(score + 1);
            playSound(require("../assets/sounds/right-1.mp3"));
          } else {
            playSound(require("../assets/sounds/wrong.mp3"));
          }
          setCount(count + 1);
          setModalVisible(!modalVisible);
        }}
        image={rightAnswer.imageNum}
        author={rightAnswer.author}
        name={rightAnswer.name}
        year={rightAnswer.year}
        count={count}
        onP={() => setModalEnd(true)}
        answer={
          <View style={styles.scoreContainer}>
            <AntDesign
              name={
                selectedAnswer === rightAnswer.imageNum
                  ? "checkcircle"
                  : "closecircle"
              }
              size={39}
              color={
                selectedAnswer === rightAnswer.imageNum
                  ? Colors.green
                  : Colors.red
              }
            />
            <Text style={styles.score}>Score: {score + 1}</Text>
          </View>
        }
      />
      <GameEndModal
        modalVisible={modalEnd}
        count={9}
        score={score + 1}
        onPressHome={() => {
          // setCount(count + 1);
          setModalEnd(!modalEnd);
          setModalVisible(!modalVisible);
          setCount(0);
          setScore(0);
          pressHandler("HomeScreen");
        }}
      />
      {/* <MyButton title="NEXT" onPressProp={() => setCount(count + 1)} /> */}
    </View>
  );
}

export default QuestionsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    width: "80%",
    height: 75,
    fontWeight: "500",
    fontSize: 26,
    color: Colors.primary,
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 10,
    borderRadius: 15,
  },
  scoreContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  score: {
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
