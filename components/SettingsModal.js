import React, { useState } from "react";
import { View, Modal, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import * as Sharing from "expo-sharing";
import * as Notifications from "expo-notifications";

import CloseButton from "./CloseButton";
import SettingItem from "./SettingItem";
import Colors from "../constants/Colors";

function SettingsModal({ modalVisible, onPressProp }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [quoteApi, setQuoteApi] = useState(
    "Be happy for this moment. This moment is your life"
  );
  const [authorApi, setAuthorApi] = useState("Omar Khayyam");

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
    const url = "https://free-quotes-api.herokuapp.com/";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setQuoteApi(data.quote);
    setAuthorApi(data.author);
  }

  const triggerNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Motivation quote here!",
        body: `${quoteApi} (c) ${authorApi}`,
        color: Colors.primary,
        subtitle: `${authorApi}:`,
        sound: require("../assets/sounds/right-2.mp3"),
      },
      trigger: {
        seconds: 5,
      },
    });
  };

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
        <Button
          title="Trigger Notifications"
          onPress={() => {
            getQuote();
            triggerNotificationHandler();
          }}
          color="#1ba"
        />
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
