import { View, Text, Modal, Image, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import MyButton from "../components/MyButton";

function pictureInfoModal({
  modalVisible,
  onPressProp,
  onP,
  count,
  image,
  author,
  name,
  year,
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/VeronikaBogdan/art-quiz-coursework/main/assets/img/${image}.jpg`,
          }}
          // resizeMode="contain"
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>
          {author}, {year}
        </Text>
        <MyButton
          style={styles.button}
          title={
            // <AntDesign name="right" size={30} color={Colors.middleYellow} />
            <AntDesign
              name="arrowright"
              size={31}
              color={Colors.middleYellow}
            />
          }
          onPressProp={count == 9 ? onP : onPressProp}
        />
      </View>
    </Modal>
  );
}

export default pictureInfoModal;

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: "80%",
    height: "85%",
    backgroundColor: Colors.middleYellow,
    marginHorizontal: 30,
    marginTop: 70,
    borderRadius: 15,
    elevation: 10,
    // opacity: 0.6,
  },
  image: {
    // maxWidth: "90%",
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 9,
  },
  text: {
    fontSize: 19,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    marginTop: 39,
    width: "30%",
  },
});
