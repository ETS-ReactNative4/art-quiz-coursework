import React, { useState } from "react";
import { View, Text, Modal, Button, Switch, StyleSheet } from "react-native";
import { Audio } from "expo-av";

import CloseButton from "./CloseButton";
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

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <CloseButton onPress={onPressProp} style={styles.closeButton} />
        {/* SettingItem */}
        <View style={styles.settingItem}>
          <Text style={styles.title}>Music:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#EB268A" }}
            thumbColor={isEnabled ? "#C88BF9" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              toggleSwitch();
              console.log(isEnabled);
              !isEnabled
                ? playSound({
                    uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  })
                : stopSound();
            }}
            value={isEnabled}
            style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
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
  settingItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
  },
  title: { fontSize: 24 },
  closeButton: {
    borderWidth: 1,
  },
});
