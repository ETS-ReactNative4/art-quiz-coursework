import { Text, View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import MyButton from "../components/MyButton";
import HomeCategoryItem from "../components/HomeCategoryItem";
import Audio from "../components/Audio";

function HomeScreen() {
  return (
    <View>
      <Audio />
      <HomeCategoryItem
        title="Artists Quiz"
        categoryScreen="ArtistsCategoriesScreen"
      />
      <HomeCategoryItem
        title="Pictures Quiz"
        categoryScreen="PicturesCategoriesScreen"
      />
      {/* <MyButton
        title="Settings"
        onPressProp={() => alert("It's a button-settting")}
      /> */}
    </View>
  );
}

export default HomeScreen;
