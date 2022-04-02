import { View, Text, Modal, Image, StyleSheet } from "react-native";

import CATEGORIES from "../data/dummy-data";

function pictureInfoModal({ modalVisible, onPressProp }) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      {/* <Image source={require("../assets/canvas-1.png")} /> */}
      <Text>You're right!!!</Text>
    </Modal>
  );
}

export default pictureInfoModal;
