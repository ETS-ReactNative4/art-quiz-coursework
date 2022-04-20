import { Button, FlatList, Text, View } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ route, navigation }) {
  const mainCategory = route.params.categoryScreen;

  function getRandomNum(a, b) {
    let min = Math.ceil(a);
    let max = Math.ceil(b);
    return Math.round(Math.random() * (max - min)) + min;
  }

  async function getMuseumDepartmentNumber() {
    const url =
      "https://collectionapi.metmuseum.org/public/collection/v1/departments";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.departments[getRandomNum(0, 9)]);
    console.log(data.departments[getRandomNum(0, 9)].departmentId);
    console.log(data.departments[getRandomNum(0, 9)].displayName);

    const urlDep =
      "https://collectionapi.metmuseum.org/public/collection/v1/departments";
    const resDep = await fetch(url);
    const dataDepartments = await res.json();

    // return [data.departments[getRandomNum(0, 9)].departmentId];
  }

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
        mainCategory={mainCategory}
        // onPressProp={pressHandler}
      />
    );
  }
  return (
    <View>
      <Button title="press" onPress={getMuseumDepartmentNumber} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem.bind()}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
