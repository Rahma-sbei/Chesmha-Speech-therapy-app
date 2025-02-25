import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomePage from "./components/screens/WelcomePage";
import LoginPage from "./components/screens/LogInPage";
import SignUp from "./components/screens/SignUp";
import OnboardingScreen from "./components/screens/Onboarding";
import TabBar from "./components/navs/TabBar";
import Typing from "./components/screens/Typing";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabBar"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Onboard" component={OnboardingScreen} /> */}
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
