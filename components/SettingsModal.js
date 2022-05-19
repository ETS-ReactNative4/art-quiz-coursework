import React, { useState } from "react";
import { View, Modal, StyleSheet, Text, Dimensions } from "react-native";
import { Audio } from "expo-av";
import * as Sharing from "expo-sharing";
import * as Notifications from "expo-notifications";

import CloseButton from "./CloseButton";
import SettingItem from "./SettingItem";
import MyButton from "./MyButton";
import Colors from "../constants/Colors";

function SettingsModal({ modalVisible, onPressProp, vibration }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVibrated, setIsVibrated] = useState(false);
  const [quoteApi, setQuoteApi] = useState(
    "Be happy for this moment. This moment is your life"
  );
  const [authorApi, setAuthorApi] = useState("Omar Khayyam");

  const toggleSwitchEnabled = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const toggleSwitchVibrated = () => {
    setIsVibrated((previousState) => !previousState);
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
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Settings</Text>
          <CloseButton onPress={onPressProp} style={styles.closeButton} />
        </View>
        <SettingItem
          title="Music"
          onPress={() => {
            toggleSwitchEnabled();
            // console.log(isEnabled);
            !isEnabled
              ? playSound(require("../assets/sounds/RiverFlowsInYou.mp3"))
              : stopSound();
          }}
          isEnabled={isEnabled}
        />
        {/* <SettingItem
          title="Vibration"
          onPress={() => {
            toggleSwitchVibrated();
            console.log(isVibrated);
            vibration = !isVibrated ? 100 : 1;
            console.log(vibration);
          }}
          isEnabled={isVibrated}
        /> */}
        <View style={styles.item}>
          <Text style={styles.text}>Get phrase right now!</Text>
          <MyButton
            title="Press"
            style={styles.button}
            onPressProp={() => {
              getQuote();
              triggerNotificationHandler();
            }}
          />
        </View>
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
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: Colors.middleYellow,
    marginHorizontal: 30,
    marginTop: 70,
    borderRadius: 15,
    elevation: 10,
    // opacity: 0.6,
  },
  headerContainer: {
    // borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 60,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 9,
    letterSpacing: 1,
    color: Colors.primary,
    // paddingLeft: 10,
  },
  closeButton: {
    marginTop: 5,
    paddingRight: 0,
  },
  item: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 107,
    // marginHorizontal: 10,
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  text: {
    // flex: 1,
    width: 120,
    // marginRight: 50,
    fontSize: 24,
    textAlign: "left",
    color: Colors.accent,
  },
  button: {
    // width: 100,
    marginHorizontal: 0,
  },
});
