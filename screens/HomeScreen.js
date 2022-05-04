import { ScrollView } from "react-native";

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
        title="Blitz Quiz"
        categoryScreen="BlitzCategoriesScreen"
      />
      <HomeCategoryItem
        title="Museum Quiz"
        categoryScreen="MuseumCategoriesScreen"
      />
    </ScrollView>
  );
}

export default HomeScreen;
