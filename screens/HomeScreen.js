import { Text, View, Pressable, StyleSheet } from "react-native";

import MyButton from "../components/MyButton";
// import Colors from "../constants/Colors";

function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen!!!</Text>
      <MyButton
        title="Settings"
        onPressProp={() => alert("It's a button-settting")}
      />
    </View>
  );
}

export default HomeScreen;
