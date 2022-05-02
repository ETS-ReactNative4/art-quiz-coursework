import React, { useState } from "react";
import { View, Modal, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

import CloseButton from "./CloseButton";
import SettingItem from "./SettingItem";
import Colors from "../constants/Colors";

function SettingsModal({ modalVisible, onPressProp }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  // const sound = new Audio.Sound();
  async function playSound(path) {
    this.sound = new Audio.Sound();

    await this.sound.loadAsync(path);
    await this.sound.playAsync();
    // await sound.unloadAsync();
  }

  async function stopSound(path) {
    await this.sound.stopAsync();
    // await sound.unloadAsync();
  }

  async function getQuote() {
    // https://free-quotes-api.herokuapp.com/
    const url = "https://free-quotes-api.herokuapp.com/";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <CloseButton onPress={onPressProp} style={styles.closeButton} />
        <SettingItem
          title="Music"
          onPress={() => {
            toggleSwitch();
            // console.log(isEnabled);
            !isEnabled
              ? playSound(require("../assets/sounds/RiverFlowsInYou.mp3"))
              : stopSound();
          }}
          isEnabled={isEnabled}
        />
        <Button title="quote" onPress={getQuote} />
        {/* <SettingItem
          title="Get Quote!"
          onPress={() => {
            toggleSwitch();
            // console.log(isEnabled);
            !isEnabled ? getQuote() : null;
          }}
          isEnabled={isEnabled}
        /> */}
      </View>
    </Modal>
  );
}

export default SettingsModal;

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "flex-end",
    // width: "80%",
    height: "85%",
    padding: 10,
    backgroundColor: Colors.middleYellow,
    marginHorizontal: 30,
    marginTop: 70,
    borderRadius: 15,
    elevation: 10,
    // opacity: 0.6,
  },
  closeButton: {
    // borderWidth: 1,
    marginBottom: 60,
  },
});
