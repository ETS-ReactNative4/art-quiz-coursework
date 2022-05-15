import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import QuestionsScreen from "./screens/QuestionsScreen";
import MuseumQuestionsScreen from "./screens/MuseumQuestionsScreen";
import SettingsModal from "./components/SettingsModal";
import HistoryModal from "./components/HistoryModal";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const [isVibrated, setIsVibrated] = useState(100);

  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.yellow },
            headerTintColor: Colors.primary,
            headerTitleStyle: { fontSize: 24 },
            contentStyle: { backgroundColor: Colors.lightYellow },
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Welcome to Art Quiz!",
              // headerTitleAlign: "center",
              headerRight: () => (
                <View>
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="ArtistsCategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "Artists Quiz",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  {/* <Feather
                    name="star"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setHistoryModalVisible(true)}
                  /> */}
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="PicturesCategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "Pictures Quiz",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  {/* <Feather
                    name="star"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setHistoryModalVisible(true)}
                  /> */}
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="BlitzCategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "Blitz Quiz",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  {/* <Feather
                    name="star"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setHistoryModalVisible(true)}
                  /> */}
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="MuseumCategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "Museum Quiz",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  {/* <Feather
                    name="star"
                    size={24}
                    color={Colors.primary}
                    onPress={() => alert("This is a score-button!")}
                  /> */}
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="QuestionsScreen"
            component={QuestionsScreen}
            options={{
              title: "Questions",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  {/* <Feather
                    name="star"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setHistoryModalVisible(true)}
                  /> */}
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="MuseumQuestionsScreen"
            component={MuseumQuestionsScreen}
            options={{
              title: "Blitz Quiz",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  {/* <Feather
                    name="star"
                    size={24}
                    color={Colors.primary}
                    onPress={() => alert("This is a score-button!")}
                  /> */}
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <SettingsModal
        modalVisible={modalVisible}
        onPressProp={() => setModalVisible(false)}
        vibration={isVibrated}
        onVibrated={() => setIsVibrated()}
      />
      <HistoryModal
        modalVisible={historyModalVisible}
        onPressProp={() => setHistoryModalVisible(false)}
        itemHistory="App.js"
      />
    </>
  );
}

// AppRegistry.registerComponent("Appname", () => App);

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    // justifyContent: "space-between",
    justifyContent: "flex-end",
  },
});
