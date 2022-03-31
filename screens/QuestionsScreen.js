import { View, Text } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";
import ArtistQuestionItem from "../components/ArtistQuestionItem";

function QuestionsScreen({ route, navigation }) {
  // const navigation = useNavigation();
  let [count, setCount] = useState(0);

  if (count === 10) count = 1;

  const headerTitle = route.params.quizTitle;
  const selectedCategory = CATEGORIES.find(
    (item) => item.title === headerTitle
  );
  const questionTitle =
    "Which is " + selectedCategory.artistsQuiz[count].author + " picture?";

  useLayoutEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation]);

  return (
    <View>
      <Text>{questionTitle}</Text>
      <ArtistQuestionItem
        count={count}
        category={selectedCategory.artistsQuiz[count]}
      />
      <Text onPress={() => setCount(count + 1)}>Вы нажали {count} раз</Text>
      <Text>А сейчас каунт = {count} раз</Text>
    </View>
  );
}

export default QuestionsScreen;
