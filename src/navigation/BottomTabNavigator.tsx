import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ClientEditScreen from "../screens/Tabs/ClientEditScreen";
import ClientListScreen from "../screens/Tabs/ClientListScreen";
import { BottomTabParamList} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="ClientList"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="ClientList"
        component={ClientListScreen}
        options={{
          title:'Client List',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ClientEdit"
        component={ClientEditScreen}
        options={{
          title:'Add Client',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="add-circle-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={40} style={{ marginBottom: -3 }} {...props} />;
}
