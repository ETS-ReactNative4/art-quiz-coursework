import { ScrollView } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

import MyButton from "../components/MyButton";
import HomeCategoryItem from "../components/HomeCategoryItem";

function HomeScreen() {
  return (
    <ScrollView>
      <HomeCategoryItem
        title="Artists Quiz"
        categoryScreen="ArtistsCategoriesScreen"
      />
      <HomeCategoryItem
        title="Pictures Quiz"
        categoryScreen="PicturesCategoriesScreen"
      />
      <HomeCategoryItem
        title="Museum Quiz"
        categoryScreen="MuseumCategoriesScreen"
      />
      {/* <MyButton title="Settings" onPressProp={getMuseumDepartmentNumber} /> */}
    </ScrollView>
  );
}

export default HomeScreen;
