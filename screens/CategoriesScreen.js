import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ route, navigation }) {
  const [arrayDepartments, setArrayDepartments] = useState([]);
  const [titleApi, setTitleApi] = useState("");
  const [imageApiUrl, setImageApiUrl] = useState(
    "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
  );
  // const [imageApiUrl, setImageApiUrl] = useState("");

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

    setArrayDepartments(data.departments);
    // let depIds = data.departments.map((item, index) => item.displayName);

    const departmentIds = data.departments[getRandomNum(0, 9)].departmentId;
    const urlDep = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentIds}`;
    const resDep = await fetch(urlDep);
    const dataDepartments = await resDep.json();

    const objectID = dataDepartments.objectIDs[getRandomNum(0, 9)];
    const urlObject = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
    const resObject = await fetch(urlObject);
    const dataObject = await resObject.json();

    setTitleApi(dataObject.title);
    setImageApiUrl(dataObject.primaryImage);
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

  function renderCategoryItemForMuseum(itemData) {
    return (
      <CategoryGridTitle
        title={itemData.item.displayName}
        // mainCategory={mainCategory}
        style={styles.boxTitle}
      />
    );
  }

  return (
    <View>
      <Button title="press" onPress={getMuseumDepartmentNumber} />
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: imageApiUrl }}
      />
      <Text>
        titleApi: {titleApi} {mainCategory}
      </Text>
      {mainCategory === "MuseumCategoriesScreen" ? (
        <FlatList
          data={arrayDepartments}
          keyExtractor={(item) => item.departmentId}
          renderItem={renderCategoryItemForMuseum.bind()}
          numColumns={2}
        />
      ) : (
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem.bind()}
          numColumns={2}
        />
      )}
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  boxTitle: {
    backgroundColor: "green",
  },
});
