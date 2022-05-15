import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
} from "react-native";

import CloseButton from "./CloseButton";
import Colors from "../constants/Colors";

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <Text>#{listLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
    {/* <BodyText>#{listLength - itemData.index}</BodyText> */}
    {/* <BodyText>{itemData.item}</BodyText> */}
  </View>
);

function HistoryModal({
  modalVisible,
  onPressProp,
  itemHistory,
  itemKey,
  itemDataHistory,
}) {
  console.log(itemDataHistory);

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>History</Text>
          <CloseButton onPress={onPressProp} style={styles.closeButton} />
        </View>
        <Text>
          {itemKey} {itemHistory}
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={itemKey}
            data={itemDataHistory}
            renderItem={renderListItem.bind(this, 10)}
            contentContainerStyle={styles.list}
          />
        </View>
        <Text>
          {itemKey} {itemHistory}
        </Text>
      </View>
    </Modal>
  );
}

export default HistoryModal;

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
    borderWidth: 1,
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
    paddingLeft: 10,
  },
  closeButton: {
    marginTop: 5,
    paddingRight: 0,
  },
  item: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 90,
    marginHorizontal: 10,
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  text: {
    // flex: 1,
    width: 160,
    fontSize: 24,
    textAlign: "center",
    color: Colors.accent,
  },
  button: {
    // width: 100,
    marginHorizontal: 0,
  },
  listContainer: {
    // flex: 1,  //для андроид должно работать скроллвью, но у меня не работает
    width: "60%",
  },
  list: {
    // flex: 1,
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
