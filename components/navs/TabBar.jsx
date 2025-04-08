import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "../screens/Home";
import Typing from "../screens/Typing";
import AudioPlaying from "../screens/Audio";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import PlantListScreen from "../screens/PlantListScreen";
import AnimalListScreen from "../screens/AnimalListScreen";
import FoodListScreen from "../screens/FoodListScreen";
import PlantDetailScreen from "../screens/PlantDetailScreen";
import AnimalDetailScreen from "../screens/AnimalDetailScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";

import Capture from "../screens/Capture";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="HomeMain" component={HomeScreen} />
    <HomeStack.Screen name="PlantList" component={PlantListScreen} />
    <HomeStack.Screen name="PlantDetail" component={PlantDetailScreen} />
    <HomeStack.Screen name="AnimalList" component={AnimalListScreen} />
    <HomeStack.Screen name="AnimalDetail" component={AnimalDetailScreen} />
    <HomeStack.Screen name="FoodList" component={FoodListScreen} />
    <HomeStack.Screen name="FoodDetail" component={FoodDetailScreen} />
  </HomeStack.Navigator>
);

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
          fontSize: 14,
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeStackScreen}
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
        component={AudioPlaying}
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
