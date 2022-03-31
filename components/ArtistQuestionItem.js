import { View, Text, Image } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
// import {} from "../assets/img/";

function ArtistQuestionItem({ category, count }) {
  const image = category.imageNum;
  // let qqq = require(`../assets/img/${image}.jpg`);

  return (
    <View>
      <Text>qweqweqew</Text>
      {/* <Text>llklklk: {image}</Text> */}
      <Image source={image} />
    </View>
  );
}

export default ArtistQuestionItem;
