import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "../screens/Home";
import Typing from "../screens/Typing";
import Audio from "../screens/Audio";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Capture from "../screens/Capture";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          }
          if (route.name === "Typing") {
            iconName = "text-height";
          }
          if (route.name === "Audio") {
            iconName = "microphone";
          }
          if (route.name === "Capture") {
            iconName = "camera";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.38)",
        tabBarStyle: {
          backgroundColor: "rgb(158, 130, 223)",
          height: 70,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarLabelStyle: {
          fontSize: 13, // Set your desired font size
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
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
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Capture"
        component={Capture}
      />
    </Tab.Navigator>
  );
}
