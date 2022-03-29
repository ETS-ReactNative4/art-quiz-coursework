import { Text, View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import MyButton from "../components/MyButton";
import HomeCategoryItem from "../components/HomeCategoryItem";

function HomeScreen() {
  return (
    <View>
      <HomeCategoryItem title="Artists Quiz" />
      <HomeCategoryItem title="Pictures Quiz" />
      <MyButton
        title="Settings"
        onPressProp={() => alert("It's a button-settting")}
      />
    </View>
  );
}

export default HomeScreen;
