import { View, Text, Image } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

function ArtistQuestionItem({ category, count }) {
  const image = category.name;

  return (
    <View>
      <Text>qweqweqew</Text>
      <Text>llklklk: {image}</Text>
      {/* <Image source={require("../assets/color-png/category-01-color.png")} /> */}
    </View>
  );
}

export default ArtistQuestionItem;
