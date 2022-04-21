import { View, Text, Modal, Image, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import MyButton from "../components/MyButton";

function GreetingMuseumModal({ modalVisible, onPress }) {
  const randNum = getRandomNum(6, 10);

  function getRandomNum(a, b) {
    let min = Math.ceil(a);
    let max = Math.ceil(b);
    return Math.round(Math.random() * (max - min)) + min;
  }

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/VeronikaBogdan/art-quiz-coursework/main/assets/art-${randNum}.png`,
          }}
        />
        <Text style={styles.name}>
          The Metropolitan Museum of Art: here art comes alive
        </Text>
        <MyButton
          style={styles.button}
          title="Continue"
          onPressProp={onPress}
        />
      </View>
    </Modal>
  );
}

export default GreetingMuseumModal;

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
    backgroundColor: Colors.middleYellow,
    marginHorizontal: 30,
    marginTop: 70,
    paddingHorizontal: 20,
    borderRadius: 15,
    elevation: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 25,
    letterSpacing: 1,
    color: Colors.primary,
  },
  image: {
    width: 300,
    height: 300,
  },
});
