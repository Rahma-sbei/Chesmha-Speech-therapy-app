import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const categories = [
  {
    id: "1",
    name: "Plants",
    icon: require("../../assets/plants-removebg-preview.png"),
    bgColor: "#E8F5E9",
  },
  {
    id: "2",
    name: "Animals",
    icon: require("../../assets/animal-removebg-preview.png"),
    bgColor: "#FFF3E0",
  },
  {
    id: "3",
    name: "Nature",
    icon: require("../../assets/nature-removebg-preview.png"),
    bgColor: "#E0F7FA",
  },
  {
    id: "4",
    name: "Food",
    icon: require("../../assets/food-removebg-preview.png"),
    bgColor: "#FCE4EC",
  },
  {
    id: "5",
    name: "Objects",
    icon: require("../../assets/objects-removebg-preview.png"),
    bgColor: "#FFFDE7",
  },
  {
    id: "6",
    name: "More",
    icon: require("../../assets/download-removebg-preview.png"),
    bgColor: "#E8EAF6",
  },
];

const HomeScreen = () => {
  const [user, setUser] = useState({});
  const [userId, setuserId] = useState({});
  const url = "http://192.168.1.16:4000/api/users";

  useEffect(() => {
    AsyncStorage.getItem("token")
      .then((token) => {
        if (token) {
          try {
            const decodedToken = jwtDecode(token);
            setuserId(decodedToken.id);
            return token;
          } catch (error) {
            console.error("Token decoding error:", error);
          }
        }
        return null;
      })
      .then((token) => {
        if (userId && token) {
          const headers = {
            Authorization: `Bearer ${token}`,
          };

          axios
            .get(`${url}/${userId}`, { headers })
            .then((res) => {
              setUser(res.data.user);
              console.log("This is the username:", user.userName);
            })
            .catch((error) => {
              console.error(error.response?.data?.msg);
            });
        }
      })
      .catch((error) => {
        console.error("Error retrieving token:", error);
      });
  }, [userId]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />

      <View style={styles.premiumBanner}>
        <View>
          <Text style={styles.greeting}>Hello!</Text>
          <Text style={styles.username}>{user.userName}</Text>
        </View>
      </View>

      {/* Categories */}
      <Text style={styles.categoryTitle}>Categories</Text>
      <FlatList
        data={categories}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: item.bgColor,
              width: 100,
              height: 120,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
            }}
          >
            <Image
              source={item.icon}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />

            <Text style={{ fontSize: 15, fontWeight: 500 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: { fontSize: 18, fontWeight: "bold", color: "white" },
  username: { fontSize: 16, color: "rgb(189, 179, 211)" },
  notificationDot: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 4,
    position: "absolute",
    top: -2,
    right: -2,
  },
  searchBar: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  premiumBanner: {
    backgroundColor: "rgb(158, 130, 223)",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 0,
  },
  premiumText: { color: "white", fontWeight: "bold", fontSize: 16 },
  premiumSubText: { color: "white", fontSize: 12 },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 30,
  },
});

export default HomeScreen;
