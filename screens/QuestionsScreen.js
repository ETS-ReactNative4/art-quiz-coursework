import { View, Text, FlatList, Image, Modal, StyleSheet } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";
import IMAGES from "../data/images";

import Colors from "../constants/Colors";
import ArtistQuestionItem from "../components/ArtistQuestionItem";
import PictureInfoModal from "../components/pictureInfoModal";
import GameEndModal from "../components/gameEndModal";
import MyButton from "../components/MyButton";
import MainButton from "../components/MainButton";

function QuestionsScreen({ route, navigation }) {
  // const navigation = useNavigation();
  let [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEnd, setModalEnd] = useState(false);

  const headerTitle = route.params.quizTitle;
  const mainCategory = route.params.mainCategory;

  const selectedCategory = CATEGORIES.find(
    (item) => item.title === headerTitle
  );

  const rightAnswer = selectedCategory.artistsQuiz[count];

  let answers = [
    rightAnswer.imageNum,
    getRandomNum(count + 1, 100),
    getRandomNum(count + 1, 100),
    getRandomNum(count + 1, 100),
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

  const questionTitle =
    mainCategory === "ArtistsCategoriesScreen"
      ? "Which is " + rightAnswer.author + " picture?"
      : "Who is the author of this picture?";

  useLayoutEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation]);

  let answer = "";

  function renderCategoryItem(itemData) {
    // answer =
    //   rightAnswer.imageNum == itemData.item.imageNum
    //     ? "ответ верный"
    //     : "ответ НЕверный";
    return mainCategory === "ArtistsCategoriesScreen" ? (
      <ArtistQuestionItem
        num={itemData.item.name}
        imgNum={itemData.item.imageNum}
        color={Colors.green}
        onPressProp={() =>
          rightAnswer.imageNum == itemData.item.imageNum
            ? setModalVisible(true)
            : null
        }
      />
    ) : (
      <MainButton
        onPress={
          () => setModalVisible(true)
          // rightAnswer.imageNum == itemData.item.imageNum
          //   ? setModalVisible(true)
          //   : null
        }
      >
        {itemData.item.author}
      </MainButton>
    );
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
      <FlatList
        data={dataAnswers}
        keyExtractor={(item) => item.author}
        renderItem={renderCategoryItem.bind()}
        numColumns={2}
      />
      <PictureInfoModal
        modalVisible={modalVisible}
        onPressProp={() => {
          setCount(count + 1);
          setModalVisible(!modalVisible);
        }}
        image={rightAnswer.imageNum}
        author={rightAnswer.author}
        name={rightAnswer.name}
        year={rightAnswer.year}
        count={count}
        onP={() => setModalEnd(true)}
      />
      <GameEndModal
        modalVisible={modalEnd}
        name="END the game"
        count={9}
        // score={}
        onPressHome={() => {
          // setCount(count + 1);
          setModalEnd(!modalEnd);
          //! ПЕРЕНАПРАВИТЬ НА СТРАНИЦУ КАТЕГОРИЙ !!!
          setModalVisible(!modalVisible);
          setCount(0);
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
});
