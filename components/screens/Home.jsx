import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TabBar from "../navs/TabBar";
import { FontAwesome } from "@expo/vector-icons";

const categories = [
  {
    id: "1",
    name: "Plants",
    // icon: require("../assets/plants.png"),
    bgColor: "#E8EAF6",
  },
  {
    id: "2",
    name: "Animals",
    // icon: require("../assets/animals.png"),
    bgColor: "#FFF3E0",
  },
  {
    id: "3",
    name: "Nature",
    // icon: require("../assets/nature.png"),
    bgColor: "#E0F7FA",
  },
  {
    id: "4",
    name: "Food",
    // icon: require("../assets/food.png"),
    bgColor: "#FCE4EC",
  },
  {
    id: "5",
    name: "Objects",
    // icon: require("../assets/objects.png"),
    bgColor: "#FFFDE7",
  },
  {
    id: "6",
    name: "Game",
    // icon: require("../assets/game.png"),
    bgColor: "#E8F5E9",
  },
  {
    id: "7",
    name: "Mobile Prepaid",
    // icon: require("../assets/mobile.png"),
    bgColor: "#FFEBEE",
  },
  {
    id: "8",
    name: "More",
    // icon: require("../assets/more.png"),
    bgColor: "#EDE7F6",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello!</Text>
          <Text style={styles.username}>Serena Harrison</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome name="bell" size={24} color="black" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />

      {/* Premium Banner */}
      <View style={styles.premiumBanner}>
        <Text style={styles.premiumText}>Go Premium</Text>
        <Text style={styles.premiumSubText}>
          Upgrade to premium, get more profit now!
        </Text>
      </View>

      {/* Categories */}
      <Text style={styles.categoryTitle}>Categories</Text>
      <FlatList
        data={categories}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryContainer,
              { backgroundColor: item.bgColor },
            ]}
          >
            {/* <Image source={item.icon} style={styles.icon} /> */}
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Tab Bar */}
      <TabBar />
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
  greeting: { fontSize: 18, fontWeight: "bold" },
  username: { fontSize: 16, color: "gray" },
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
    backgroundColor: "#9C27B0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  premiumText: { color: "white", fontWeight: "bold", fontSize: 16 },
  premiumSubText: { color: "white", fontSize: 12 },
  categoryTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});

export default HomeScreen;
