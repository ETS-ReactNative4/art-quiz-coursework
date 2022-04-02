import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

function ArtistQuestionItem({ id, category, color, num, onPressProp }) {
  const imageNum = category.imageNum;
  let imageLink = `https://raw.githubusercontent.com/VeronikaBogdan/art-quiz-coursework/main/assets/img/${imageNum}.jpg`;

  return (
    <View>
      <Pressable
        android_ripple={{ color: color }}
        style={(pressed) => [
          styles.imageContainer,
          pressed && num !== null ? styles.rightAnswer : null,
        ]}
        onPress={onPressProp}
      >
        <Image
          style={styles.image}
          source={{
            uri: imageLink,
          }}
        />
      </Pressable>
    </View>
  );
}

export default ArtistQuestionItem;

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    borderRadius: 15,
    margin: 10,
    // height: 150,
  },
  image: {
    backgroundColor: "red",
    width: 165,
    height: 165,
    borderRadius: 15,
    // marginLeft: 10,
  },
  rightAnswer: {
    backgroundColor: Colors.green,
    opacity: 0.5,
  },
});
