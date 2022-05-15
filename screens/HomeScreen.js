import { Button, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/firebase-config";

import HomeCategoryItem from "../components/HomeCategoryItem";

import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen() {
  const [keyHistory, setKeyHistory] = useState(-1);
  const [value, setValue] = useState("");
  const [v, setV] = useState("");

  const storeData = async (value) => {
    try {
      let q = await AsyncStorage.setItem("@storage_Key", value);
      setValue(value);
      // console.log(value);
    } catch (error) {}
  };

  const getDataStore = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        // value previously stored
        console.log("Value saved in memory is: " + value);
        console.log("Value a: " + value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    async function fetchMyAPI() {
      const quizesCol = collection(db, "quizes");
      const quizesSnapshot = await getDocs(quizesCol);
      const quizesList = quizesSnapshot.docs.map((doc) => doc.data());

      console.log(quizesList[0]);
      console.log(quizesList[0].category);
      setV(quizesList[1].category);
    }

    fetchMyAPI();
  }, [v]);

  return (
    <ScrollView>
      <Text>adfadf {v}</Text>
      <HomeCategoryItem
        title="Artists Quiz"
        categoryScreen="ArtistsCategoriesScreen"
        // key={() => {
        //   setKeyHistory(keyHistory + 1);
        // }}
      />
      <HomeCategoryItem
        title="Pictures Quiz"
        categoryScreen="PicturesCategoriesScreen"
      />
      <HomeCategoryItem
        title="Blitz Quiz"
        categoryScreen="BlitzCategoriesScreen"
      />
      {/* <HomeCategoryItem
        title="Museum Quiz"
        categoryScreen="MuseumCategoriesScreen"
      /> */}
    </ScrollView>
  );
}

export default HomeScreen;
