import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CategoryGridTitle from "../components/CategoryGridTitle";
import GreetingMuseumModal from "../components/GreetingMuseumModal";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ route /*, navigation*/ }) {
  const [isGreeting, setIsGreeting] = useState(true);
  const [arrayDepartments, setArrayDepartments] = useState([]);
  const [arrayItems, setArrayItems] = useState([]);
  const [arrayItemsWrong, setArrayItemsWrong] = useState([]);
  const [titleApi, setTitleApi] = useState("");
  const [imageApiUrl, setImageApiUrl] = useState(
    "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
  );
  // const [imageApiUrl, setImageApiUrl] = useState("");

  const NAVIGATION = useNavigation();

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

    const departmentIds = data.departments[0].departmentId;
    // const urlDep = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentIds}`;
    const urlDep = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentIds}`;
    const resDep = await fetch(urlDep);
    const dataDepartments = await resDep.json();

    setArrayItems([
      ...dataDepartments.objectIDs.filter((item, index) => index < 10),
    ]);

    setArrayItemsWrong([
      ...dataDepartments.objectIDs.filter(
        (item, index) => index >= 10 && index < 70
      ),
    ]);

    const objectID = dataDepartments.objectIDs[getRandomNum(0, 9)];
    const urlObject = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
    const resObject = await fetch(urlObject);
    const dataObject = await resObject.json();

    setTitleApi(dataObject.title);
    setImageApiUrl(dataObject.primaryImage);
  }

  function renderCategoryItem(itemData) {
    function selectQuizItemHadler() {
      NAVIGATION.navigate("QuestionsScreen", {
        quizTitle: itemData.item.title,
        mainCategory: mainCategory,
      });
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.colorImage}
        mainCategory={mainCategory}
        onPressProp={selectQuizItemHadler}
      />
    );
  }

  function renderCategoryItemForMuseum(itemData) {
    function pressHandler() {
      NAVIGATION.navigate("MuseumQuestionsScreen", {
        quizTitle: itemData.item.displayName,
        mainCategory: mainCategory,
        id: itemData.item.departmentId,
        rightTitle: titleApi,
        rightImage: imageApiUrl,
        // arrayItems: arrayItems,
        // arrayItemsWrong: arrayItemsWrong,
      });
    }

    return (
      <View>
        <Button
          title={itemData.item.displayName}
          onPress={() => {
            pressHandler();
          }}
        />
      </View>
      // <CategoryGridTitle
      //   title={itemData.item.displayName}
      //   // mainCategory={mainCategory}
      //   style={styles.boxTitle}
      //   onPressProp={pressHandler}
      // />
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
