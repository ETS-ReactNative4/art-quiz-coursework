import React from "react";
import { View, Text, Modal, Button } from "react-native";

function SettingsModal({ modalVisible, onPressProp }) {
  return (
    <Modal animationType="fade" transparent={false} visible={modalVisible}>
      <View>
        <Text>This is modal settings</Text>
        <Button title="press" onPress={onPressProp} />
      </View>
    </Modal>
  );
}

export default SettingsModal;
