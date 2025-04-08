import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import WelcomePage from "./components/screens/WelcomePage";
import LoginPage from "./components/screens/LogInPage";
import SignUp from "./components/screens/SignUp";
import OnboardingScreen from "./components/screens/Onboarding";
import TabBar from "./components/navs/TabBar";
import PlantListScreen from "./components/screens/PlantListScreen";
import PlantDetailScreen from "./components/screens/PlantDetailScreen";
import AnimalListScreen from "./components/screens/AnimalListScreen";
import AnimalDetailScreen from "./components/screens/AnimalDetailScreen";
import OTPVerificationScreen from "./components/screens/OTPVerificationScreen";
import EmailCheckScreen from "./components/screens/EmailCheckScreen";
import PasswordResetScreen from "./components/screens/PasswordResetScreen";
import ResetSuccessScreen from "./components/screens/ResetSuccessScreen";
import FoodListScreen from "./components/screens/FoodListScreen";
import FoodDetailScreen from "./components/screens/FoodDetailScreen";
import Drawer from "./components/navs/Drawer";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomePage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Onboard" component={OnboardingScreen} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="PlantList" component={PlantListScreen} />
        <Stack.Screen name="PlantDetail" component={PlantDetailScreen} />
        <Stack.Screen name="AnimalList" component={AnimalListScreen} />
        <Stack.Screen name="AnimalDetail" component={AnimalDetailScreen} />
        <Stack.Screen name="EmailCheck" component={EmailCheckScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
        <Stack.Screen name="ResetSuccess" component={ResetSuccessScreen} />
        <Stack.Screen name="FoodList" component={FoodListScreen} />
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
        <Stack.Screen name="Drawer" component={Drawer}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="WelcomePage"
    //     screenOptions={{ headerShown: false }}
    //   >
    //     <Stack.Screen name="WelcomePage" component={WelcomePage} />
    //     <Stack.Screen name="LoginPage" component={LoginPage} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="Onboard" component={OnboardingScreen} />
    //     <Stack.Screen name="TabBar" component={TabBar} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
