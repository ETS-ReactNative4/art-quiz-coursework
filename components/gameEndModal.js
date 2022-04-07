import { View, Text, Modal, Image, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import MyButton from "../components/MyButton";

function gameEndModal({
  modalVisible,
  onPressHome,
  onPressNext,
  count,
  score,
}) {
  const image =
    score === 10
      ? require("../assets/trophy.png")
      : require("../assets/color-palette-face.png");

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Image style={styles.image} source={image} />
        <Text style={styles.name}>
          {score === 10 ? "Congratulations!" : "Good job!"}
        </Text>
        <Text style={styles.score}>Score: {score} / 10</Text>
        <View style={styles.buttonsContainer}>
          <MyButton
            style={styles.button}
            title="Home"
            onPressProp={onPressHome}
          />
          <MyButton style={styles.button} title="Next quiz" />
        </View>
      </View>
    </Modal>
  );
}

export default gameEndModal;

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
    backgroundColor: Colors.middleYellow,
    marginHorizontal: 30,
    marginTop: 70,
    borderRadius: 15,
    elevation: 10,
  },
  image: {
    // maxWidth: "90%",
    width: 300,
    height: 300,
  },
  name: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 9,
    letterSpacing: 1,
    color: Colors.primary,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 15,
  },
  score: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    // color: Colors.primary,
    letterSpacing: 1,
  },
});
