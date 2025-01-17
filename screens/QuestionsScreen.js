import * as React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Vibration,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { db } from "../firebase/firebase-config";

import { CATEGORIES } from "../data/dummy-data";
import images from "../data/images";
import Colors from "../constants/Colors";

import ArtistQuestionItem from "../components/ArtistQuestionItem";
import PictureInfoModal from "../components/pictureInfoModal";
import GameEndModal from "../components/gameEndModal";
import MyButton from "../components/MyButton";
import MainButton from "../components/MainButton";
import HistoryModal from "../components/HistoryModal";

function QuestionsScreen({ route, navigation }) {
  const NAVIGATION = useNavigation();

  const headerTitle = route.params.quizTitle;
  const mainCategory = route.params.mainCategory;

  const [IMAGES, setImagesList] = useState({
    author: "author",
    imageNum: "123",
    name: "PICTURE'S NAME",
    year: "YEAR",
  });

  const [count, setCount] = useState(0);
  let randAnswer =
    mainCategory === "BlitzCategoriesScreen"
      ? images[getRandomNum(count + 1, 99)]
      : IMAGES[getRandomNum(count + 1, 99)];
  // console.log(randAnswer);

  const [modalVisible, setModalVisible] = useState(false);
  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const [modalEnd, setModalEnd] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState("0");

  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  useEffect(() => {
    async function fetchMyAPI() {
      const hostoryCol = collection(db, "images");
      const historySnapshot = await getDocs(hostoryCol);
      const historyList = historySnapshot.docs.map((doc) => doc.data());

      setImagesList(historyList);
    }

    fetchMyAPI();
  }, []);

  const selectedCategory = CATEGORIES.find(
    (item) => item.title === headerTitle
  );

  const rightAnswer = selectedCategory.artistsQuiz[count];

  let questionTitle;
  let blitzAnswer;
  // let randAnswer = IMAGES[getRandomNum(121, 200)];

  if (mainCategory === "ArtistsCategoriesScreen")
    questionTitle = "Which is " + rightAnswer.author + " picture?";
  else if (mainCategory === "PicturesCategoriesScreen")
    questionTitle = "Who is the author of this picture?";
  else
    switch (getRandomNum(1, 6)) {
      case 1:
        questionTitle = `Is this picture painted by ${rightAnswer.author}?`;
        blitzAnswer = rightAnswer.imageNum;
        break;
      case 2:
        questionTitle = `Is the name of this picture "${rightAnswer.name}"?`;
        blitzAnswer = rightAnswer.imageNum;
        break;
      case 3:
        questionTitle = `Was this picture painted in ${rightAnswer.year}?`;
        blitzAnswer = rightAnswer.imageNum;
        break;
      case 4:
        questionTitle = `Is this picture painted by ${randAnswer.author}?`;
        blitzAnswer = randAnswer.imageNum;
        break;
      case 5:
        questionTitle = `Is the name of this picture "${randAnswer.name}"?`;
        blitzAnswer = randAnswer.imageNum;
        break;
      case 6:
        questionTitle = `Was this picture painted in ${randAnswer.year}?`;
        blitzAnswer = randAnswer.imageNum;
        break;
      default:
        break;
    }

  let answers = [
    rightAnswer.imageNum,
    getRandomNum(count + 2, 99),
    getRandomNum(count + 4, 99),
    getRandomNum(count + 3, 99),
  ];

  shake(answers);

  let dataAnswers = [
    images[answers[0]], //ТУТ
    images[answers[1]], //ТУТ
    images[answers[2]], //ТУТ
    images[answers[3]], //ТУТ
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
            // useEffect(() => {
            //   setSelectedAnswer(itemData.item.imageNum);
            // }, [selectedAnswer]);
          }}
        />
      );
    if (mainCategory === "PicturesCategoriesScreen")
      return (
        <MainButton
          onPress={() => {
            setSelectedAnswer(itemData.item.imageNum);
            // useEffect(() => {
            //   setSelectedAnswer(itemData.item.imageNum);
            // }, [selectedAnswer]);
            setModalVisible(true);
            Vibration.vibrate(100);
            // selectedAnswer === rightAnswer.imageNum ? playSound() : null;
          }}
        >
          {itemData.item.author}
        </MainButton>
      );
    if (mainCategory === "BlitzCategoriesScreen")
      // useEffect(() => {
      //   setSelectedAnswer(randAnswer.imageNum);
      // }, [selectedAnswer]);
      return (
        <View style={styles.answersBox}>
          <MainButton
            onPress={() => {
              setSelectedAnswer(randAnswer.imageNum);
              // useEffect(() => {
              //   setSelectedAnswer(randAnswer.imageNum);
              // }, [selectedAnswer]);
              setModalVisible(true);
              Vibration.vibrate(100);
              console.log(
                rightAnswer.imageNum +
                  "   " +
                  randAnswer.imageNum +
                  "  " +
                  selectedAnswer +
                  "  " +
                  blitzAnswer
              );
            }}
          >
            Yes
          </MainButton>
          <MainButton
            onPress={() => {
              setSelectedAnswer(+randAnswer.imageNum + 1);
              // useEffect(() => {
              //   setSelectedAnswer(+randAnswer.imageNum + 1);
              // }, [selectedAnswer]);
              setModalVisible(true);
              Vibration.vibrate(100);
              console.log(
                rightAnswer.imageNum +
                  "   " +
                  randAnswer.imageNum +
                  "  " +
                  selectedAnswer +
                  "  " +
                  blitzAnswer
              );
            }}
          >
            No
          </MainButton>
        </View>
      );
    if (mainCategory === "MuseumCategoriesScreen")
      return <Text>museum item</Text>;
  }

  // useEffect(() => {}, [selectedAnswer]);
  console.log(selectedAnswer);

  let randomNumber = getRandomNum(0, 1000000);

  // const setData = async (score) => {
  //   // Add a new document in collection "cities"
  //   await setDoc(doc(db, "images", "99"), {
  //     author: "Jean-Leon Jerome",
  //     name: "Gladiator Fight",
  //     year: "1872",
  //     imageNum: "99",
  //   });
  // };
  let cat = "";
  if (mainCategory === "ArtistsCategoriesScreen") cat = "Artists Quiz";
  if (mainCategory === "PicturesCategoriesScreen") cat = "Pictures Quiz";
  if (mainCategory === "BlitzCategoriesScreen") cat = "Blitz Quiz";
  const setData = async (score) => {
    await setDoc(doc(db, "history", `${randomNumber}`), {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString("en-US", { hour12: false }),
      score: score,
      mainCategory: cat,
      headerTitle: headerTitle,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {count + 1}. {questionTitle}
        {/* {mainCategory !== "BlitzCategoriesScreen" ? questionTitle : "hiiiiiiii"} */}
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
      {mainCategory === "PicturesCategoriesScreen" ? (
        <FlatList
          data={dataAnswers}
          keyExtractor={(item) => item.author}
          renderItem={renderCategoryItem.bind()}
          numColumns={2}
        />
      ) : null}
      {mainCategory === "ArtistsCategoriesScreen" ? (
        <FlatList
          data={dataAnswers}
          keyExtractor={(item) => item.author}
          renderItem={renderCategoryItem.bind()}
          numColumns={2}
        />
      ) : null}
      {mainCategory === "BlitzCategoriesScreen" ? renderCategoryItem() : null}
      <Text style={[styles.score, { marginTop: 5 }]}>
        Current score: {score}
      </Text>
      <PictureInfoModal
        modalVisible={modalVisible}
        onPressProp={() => {
          // selectedAnswer === rightAnswer.imageNum ? setScore(score + 1) : null;

          // if (blitzAnswer === rightAnswer.imageNum || selectedAnswer) {
          // if (selectedAnswer === rightAnswer.imageNumber) {
          if (rightAnswer.imageNum === selectedAnswer || blitzAnswer) {
            // if (rightAnswer.imageNum === blitzAnswer) {
            setScore(score + 1);
            playSound(require("../assets/sounds/right-1.mp3"));
            // } else if (blitzAnswer === rightAnswer.imageNum || selectedAnswer) {
            //   playSound(require("../assets/sounds/wrong.mp3"));
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
                // blitzAnswer === rightAnswer.imageNum || selectedAnswer
                // rightAnswer.imageNum === selectedAnswer || blitzAnswer
                // rightAnswer.imageNum === blitzAnswer
                selectedAnswer === rightAnswer.imageNum || blitzAnswer
                  ? "checkcircle"
                  : "closecircle"
              }
              size={39}
              color={
                // blitzAnswer === rightAnswer.imageNum || selectedAnswer
                // rightAnswer.imageNum === selectedAnswer || blitzAnswer
                // rightAnswer.imageNum === blitzAnswer
                selectedAnswer === rightAnswer.imageNum || blitzAnswer
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
          setData(score + 1);
          setCount(0);
          setScore(0);
          pressHandler("HomeScreen");
        }}
        onPressHistory={() => {
          setHistoryModalVisible(true);
          setData(score + 1);
          // console.log(pastGuesses);
        }}
      />
      <HistoryModal
        modalVisible={historyModalVisible}
        onPressProp={() => {
          setHistoryModalVisible(false);
        }}
        itemHistory={value}
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
    width: Dimensions.get("window").width - 10,
    // height: Dimensions.get("window").height - 100,
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
  answersBox: {
    flexDirection: "row",
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
