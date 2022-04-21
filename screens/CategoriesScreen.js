import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import { useState } from "react";

import CategoryGridTitle from "../components/CategoryGridTitle";
import GreetingMuseumModal from "../components/GreetingMuseumModal";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ route, navigation }) {
  const [isGreeting, setIsGreeting] = useState(true);
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
      {mainCategory === "MuseumCategoriesScreen" ? (
        <View style={styles.container}>
          {isGreeting ? (
            <GreetingMuseumModal
              modalVisible={isGreeting}
              onPress={() => {
                getMuseumDepartmentNumber();
                setIsGreeting(false);
              }}
            />
          ) : null}
          <FlatList
            data={arrayDepartments}
            keyExtractor={(item) => item.departmentId}
            renderItem={renderCategoryItemForMuseum.bind()}
            numColumns={2}
          />
        </View>
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
  container: {
    height: Dimensions.get("window").height - 60,
  },
  boxTitle: {
    backgroundColor: "orange",
    padding: 20,
  },
});
