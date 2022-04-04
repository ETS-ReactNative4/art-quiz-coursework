import { View, Text, Image, Pressable, StyleSheet } from "react-native";

function ArtistQuestionItem({ imgNum, color, onPressProp }) {
  let imageLink = `https://raw.githubusercontent.com/VeronikaBogdan/art-quiz-coursework/main/assets/img/${imgNum}.jpg`;

  return (
    <View>
      <Pressable
        android_ripple={{ color: color, opacity: 0.5 }}
        style={(pressed) => [
          styles.imageContainer,
          pressed ? styles.rightAnswer : null,
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
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 17,
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 15,
  },
  rightAnswer: {
    // backgroundColor: Colors.green,
    // opacity: 0.5,
  },
});
