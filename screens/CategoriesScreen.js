import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen() {
  function renderCategoryItem(itemData) {
    // function pressHandler() {
    //   navigation.navigate('MealsOverview', {
    //     categoryId: itemData.item.id,
    // 		headerTitle: itemData.item.title,
    //   });
    // }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.colorImage}
        // onPressProp={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem.bind()}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
