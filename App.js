import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import QuestionsScreen from "./screens/QuestionsScreen";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  // const navigation = useNavigation();
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.yellow },
            headerTintColor: Colors.primary,
            headerTitleStyle: { fontSize: 24 },
            contentStyle: { backgroundColor: Colors.lightYellow },
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Welcome to Art Quiz!",
              // headerTitleAlign: "center",
              headerRight: () => (
                <View>
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => alert("This is a settings-button!")}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="ArtistsCategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "Artists Quiz",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  <Feather
                    name="home"
                    size={24}
                    color={Colors.primary}
                    onPress={() => navigation.popToTop()}
                  />
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => alert("This is a settings-button!")}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="PicturesCategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "Pictures Quiz",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  <Feather
                    name="home"
                    size={24}
                    color={Colors.primary}
                    onPress={() => alert("This is a home-button!")}
                  />
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={({ navigation }) =>
                      navigation.navigate("HomeScreen")
                    }
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="QuestionsScreen"
            component={QuestionsScreen}
            options={{
              title: "Questions",
              headerRight: () => (
                <View style={styles.iconsContainer}>
                  <Feather
                    name="home"
                    size={24}
                    color={Colors.primary}
                    onPress={() => alert("This is a home-button!")}
                  />
                  <Feather
                    name="settings"
                    size={24}
                    color={Colors.primary}
                    onPress={() => alert("This is a settings-button!")}
                  />
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
});
