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

      setQ(historyList);
    }

    fetchMyAPI();
  }, [q]);

  const renderListItem = (itemData) => (
    <View style={styles.listItem}>
      <View style={styles.scoreText}>
        <Text style={styles.listItemText}>{itemData.item.date}</Text>
        <Text style={[styles.listItemText, { marginRight: 45 }]}>
          {itemData.item.time}
        </Text>
        <Text
          style={[
            styles.listItemText,
            { fontWeight: "bold", marginRight: 30, fontSize: 23 },
          ]}
        >
          {itemData.item.score}
        </Text>
      </View>
      <View style={styles.infoBottom}>
        <Text style={{ fontSize: 17 }}>{itemData.item.mainCategory}</Text>
        <Text style={{ fontSize: 17 }}>{itemData.item.headerTitle}</Text>
      </View>
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
          <View style={styles.header}>
            <Text style={[styles.headerText, { marginLeft: 5 }]}>Date</Text>
            <Text style={styles.headerText}>Time</Text>
            <Text style={styles.headerText}>Score</Text>
          </View>
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
    // borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 22,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1, //для андроид должно работать скроллвью, но у меня не работает
    // width: "60%",
    flexDirection: "column-reverse",
  },
  list: {
    // flex: 1,
    // width: "100%",
    flexGrow: 1,
  },
  listItem: {
    borderColor: "#cb2",
    padding: 15,
    marginVertical: 10,
    // flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: Colors.lightOrange,
    borderRadius: 10,
  },
  listItemText: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  scoreText: {
    // marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  infoBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
