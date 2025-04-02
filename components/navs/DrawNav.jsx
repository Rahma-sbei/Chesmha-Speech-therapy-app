// import React, { useContext } from "react";
// import { Button, View, Text, Pressable } from "react-native";
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
// } from "@react-navigation/drawer";
// import TabNavigation from "../nav/TabNavigation";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Header from "../components/header-footer/Header";
// import { ThemeContext } from "../App";
// import AboutUs from "../components/AboutUs";

// export default function DrawNav({ route }) {
//   const Drawer = createDrawerNavigator();
//   const { email } = route.params;
//   const [isDark, toggleTheme] = useContext(ThemeContext);

//   function CustomDrawerContent({ email, ...props }) {
//     return (
//       <DrawerContentScrollView>
//         <View style={{ padding: 20 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "center",
//               marginBottom: 40,
//             }}
//           >
//             <Icon
//               name="user-circle-o"
//               size={100}
//               color={isDark ? "#0F8C17" : "pink"}
//             />
//           </View>

//           <Text
//             style={{
//               fontSize: 15,
//               marginBottom: 20,
//               fontWeight: "bold",
//               color: "black",
//             }}
//           >
//             Welcome, {email || "Guest"}!
//           </Text>
//           <DrawerItemList
//             state={props.state}
//             navigation={props.navigation}
//             descriptors={props.descriptors}
//           ></DrawerItemList>
//           <Pressable
//             style={{
//               marginTop: 20,
//               backgroundColor: isDark ? "#0F8C17" : "pink",
//               color: isDark ? "black" : "white",
//               height: 50,
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 30,
//             }}
//             onPress={() => props.navigation.navigate("SignIn")}
//           >
//             <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
//               Log Out
//             </Text>
//           </Pressable>
//         </View>
//       </DrawerContentScrollView>
//     );
//   }

//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => (
//         <CustomDrawerContent email={email} {...props} />
//       )}
//       screenOptions={({ route }) => ({
//         drawerIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === "TabNavigation") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name == "aboutUs") {
//             iconName = "hbjk";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         drawerActiveTintColor: isDark ? "#0F8C17" : "pink",
//         drawerInactiveTintColor: "gray",
//         header: () => <Header />,
//       })}
//     >
//       <Drawer.Screen
//         options={{
//           drawerLabel: "Home",
//           headerTitle: "Welcome home",
//           headerTitleStyle: { fontSize: 14, color: "black" },
//           headerStyle: {
//             backgroundColor: isDark ? "#0F8C17" : "pink",
//           },
//         }}
//         name="TabNavigation"
//         component={TabNavigation}
//       />
//       <Drawer.Screen
//         options={{
//           drawerLabel: "About us",
//           headerTitle: "About us",
//           headerTitleStyle: { fontSize: 14, color: "black" },
//           headerStyle: {
//             backgroundColor: isDark ? "#0F8C17" : "pink",
//           },
//         }}
//         name="aboutUs"
//         component={AboutUs}
//       />
//     </Drawer.Navigator>
//   );
// }
