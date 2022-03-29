import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#F7D76F" },
            headerTintColor: Colors.primary,
            headerTitleStyle: { fontSize: 24 },
            contentStyle: { backgroundColor: "#FFF4E9" },
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
