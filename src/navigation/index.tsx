import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useEffect,useState} from "react";
import { ColorSchemeName } from "react-native";
import { getData } from "./../utils/storage";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(()=>{
    const getToken = async()=>{
      const token = await getData("token");
      token ? setIsLogged(true) : ""
    }
    getToken()
  },[])

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={isLogged?"Root":"Login"}
        >
          <Stack.Screen name="Login" component={AuthNavigator} />
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
