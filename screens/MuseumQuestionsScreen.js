import { View, Text, Button, Image, FlatList } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";

function MuseumQuestionsScreen({ route, navigation }) {
  const [titleApi, setTitleApi] = useState("");
  const [imageApiUrl, setImageApiUrl] = useState(
    "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
  );

  const [arrayItems, setArrayItems] = useState([]);
  const [arrayItemsWrong, setArrayItemsWrong] = useState([]);
  const [variant, setVariant] = useState("");

  const [count, setCount] = useState(0);

  const headerTitle = route.params.quizTitle;
  const mainCategory = route.params.mainCategory;
  const id = route.params.id;

  const rightAnswer = arrayItems[count];

  let answers = [
    rightAnswer,
    arrayItemsWrong[getRandomNum(11, 20)],
    arrayItemsWrong[getRandomNum(21, 30)],
    arrayItemsWrong[getRandomNum(31, 50)],
  ];

  shake(answers);

  let dataAnswers = [
    getItem(answers[0]),
    getItem(answers[1]),
    getItem(answers[2]),
    getItem(answers[3]),
  ];

  function shake(arr) {
    return arr.sort((a, b) => Math.random() - 0.5);
  }

  function getRandomNum(a, b) {
    let min = Math.ceil(a);
    let max = Math.ceil(b);
    return Math.round(Math.random() * (max - min)) + min;
  }

  async function getItem(number) {
    const urlObject = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${number}`;
    const resObject = await fetch(urlObject);
    const dataObject = await resObject.json();
    // setTitleApi(dataObject.title);

    // setVariant(dataObject);
  }

  async function getMuseumDepartmentNumber() {
    const urlDep = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${id}`;
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

    const urlObject = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayItems[0]}`;
    const resObject = await fetch(urlObject);
    const dataObject = await resObject.json();

    setTitleApi(dataObject.title);
    setImageApiUrl(dataObject.primaryImage);
  }

  //! Для каждой викторины установить свое название
  useLayoutEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation]);

  function generateAnswers() {}
  const [q, setQ] = useState(false);

  function renderCategoryItem(itemData) {
    if (mainCategory === "MuseumCategoriesScreen") return <Text> iii </Text>;
  }

  return (
    <View>
      <Text>museum questions screen d</Text>
      <Button
        title="press to start"
        onPress={() => {
          getMuseumDepartmentNumber();
          setQ(true);
          console.log("arrayItems: " + arrayItems);
        }}
      />
      <Button
        title={headerTitle}
        color="#123a"
        onPress={() => {
          // getMuseumDepartmentNumber();
          // getItem(arrayItems[0]);
          // console.log("v: " + variant);
          console.log("array items: " + arrayItems[1]);
          console.log("museum category id: " + id);
          console.log("answer " + answers);
          console.log(dataAnswers[0]);

          console.log("title api: " + titleApi);
        }}
      />

      {q ? (
        <View>
          <Text>
            {arrayItems[0]}, {arrayItemsWrong[getRandomNum(11, 20)]},
            {arrayItemsWrong[getRandomNum(21, 30)]},
            {arrayItemsWrong[getRandomNum(31, 50)]},
          </Text>
          <Text>rigth answer : {titleApi}</Text>
          {/* <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: imageApiUrl,
            }}
          /> */}
        </View>
      ) : null}
      {/* <FlatList
        data={dataAnswers}
        keyExtractor={(item) => item.objectID}
        renderItem={renderCategoryItem.bind()}
        numColumns={2}
      /> */}
      {/* <Button title={titleApi} onPress={getMuseumDepartmentNumber} /> */}
      <Text>{titleApi}</Text>
    </View>
  );
}

export default MuseumQuestionsScreen;
