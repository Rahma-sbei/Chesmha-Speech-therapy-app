import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import WelcomePage from "./components/screens/WelcomePage";
import LoginPage from "./components/screens/LogInPage";
import SignUp from "./components/screens/SignUp";
import OnboardingScreen from "./components/screens/Onboarding";
import Drawer from "./components/navs/Drawer";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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
