import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import Typing from "../screens/Typing";
import Audio from "../screens/Audio";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          }
          if (route.name === "Typing") {
            iconName = "text";
          }
          if (route.name === "Audio") {
            iconName = "microphone";
          }
          if (route.name === "Capture") {
            iconName = "camera";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#9583EE",
        tabBarInactiveTintColor: "white",
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Typing"
        component={Typing}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Audio"
        component={Audio}
      />
    </Tab.Navigator>
  );
}
