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
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Image
          style={styles.image}
          source={require("../assets/color-palette-face.png")}
        />
        <Text style={styles.name}>Good job!</Text>
        <Text style={styles.score}>Score</Text>
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
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 9,
    letterSpacing: 3,
    color: Colors.primary,
  },
  text: {
    fontSize: 19,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 15,
  },
});
