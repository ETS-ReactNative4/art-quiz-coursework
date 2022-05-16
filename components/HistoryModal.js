import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
} from "react-native";

import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/firebase-config";

import CloseButton from "./CloseButton";
import Colors from "../constants/Colors";

function HistoryModal({
  modalVisible,
  onPressProp,
  itemHistory,
  itemKey,
  itemDataHistory,
}) {
  const [q, setQ] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      const hostoryCol = collection(db, "history");
      const historySnapshot = await getDocs(hostoryCol);
      const historyList = historySnapshot.docs.map((doc) => doc.data());

      console.log(historyList);

      setQ(historyList);

      // setSelectedQuiz(quizesList[id].category);
      // setImageUrl(quizesList[id].categoryUrl);
    }

    fetchMyAPI();
  }, []);

  const renderListItem = (itemData, index) => (
    <View style={styles.listItem}>
      <Text>{itemData.item.date}</Text>
      <Text>{itemData.item.time}</Text>
      <Text>{itemData.item.score}</Text>
      <Text>{index}</Text>
    </View>
  );

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>History</Text>
          <CloseButton onPress={onPressProp} style={styles.closeButton} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => item.time}
            data={q}
            renderItem={renderListItem.bind()}
            contentContainerStyle={styles.list}
          />
        </View>
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
    borderColor: "#cb2",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
