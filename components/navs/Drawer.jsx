import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import TabBar from "./TabBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text, Pressable } from "react-native";

export default function Drawer({ route }) {
  const Drawer = createDrawerNavigator();
  //const { email } = route.params;
  const email = "this is the name ";

  function CustomDrawerContent({ email, ...props }) {
    return (
      <DrawerContentScrollView>
        <View style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <FontAwesome name="user" size={100} color="rgb(152, 122, 223)" />
          </View>

          <Text
            style={{
              fontSize: 15,
              marginBottom: 20,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Welcome, {email || "Guest"}!
          </Text>
          <DrawerItemList
            state={props.state}
            navigation={props.navigation}
            descriptors={props.descriptors}
          ></DrawerItemList>
          <Pressable
            style={{
              marginTop: 20,
              backgroundColor: "rgb(152, 122, 223)",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              flexDirection: "row",
              gap: 20,
            }}
            onPress={() => props.navigation.navigate("SignIn")}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Log Out
            </Text>
            <FontAwesome name="sign-out" size={30} color="white" />
          </Pressable>
        </View>
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent email={email} {...props} />
      )}
      screenOptions={({ route }) => ({
        drawerPosition: "right",
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "TabBar") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name == "sign out") {
            iconName = "hbjk";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: "rgb(152, 122, 223)",
        drawerInactiveTintColor: "gray",
      })}
    >
      <Drawer.Screen
        options={({ navigation }) => ({
          drawerLabel: "Home",
          headerTitle: "",
          headerRight: () => (
            <Pressable onPress={() => navigation.toggleDrawer()}>
              <FontAwesome
                name="bars"
                size={24}
                style={{ marginRight: 20, marginTop: 30 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesome
                name="chevron-left"
                size={27}
                style={{ marginLeft: 22, marginTop: 30 }}
              />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: "white",
            height: 110,
            elevation: 0,
            shadowOpacity: 0,
            shadowRadius: 0,
          },
        })}
        name="TabBar"
        component={TabBar}
      />
    </Drawer.Navigator>
  );
}
