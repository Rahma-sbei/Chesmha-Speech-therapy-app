import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const foodData = [
  {
    id: "couscous",
    name: "Couscous",
    image: require("../../assets/couscous.jpg"),
  },
  { id: "brik", name: "Brik", image: require("../../assets/Brik.jpg") },
  {
    id: "lablabi",
    name: "Lablabi",
    image: require("../../assets/lablebi.jpg"),
  },
  {
    id: "mouchouia",
    name: "Mouchouia salad",
    image: require("../../assets/Machouia salad.jpg"),
  },
  { id: "ojja", name: "Ojja", image: require("../../assets/Ojja.jpg") },
  {
    id: "kafteji",
    name: "Kafteji",
    image: require("../../assets/kafteji.jpg"),
  },
  {
    id: "mloukhia",
    name: "Mloukhia",
    image: require("../../assets/Mloukhia.jpg"),
  },
  { id: "chorba", name: "Chorba", image: require("../../assets/chorba.jpg") },
  {
    id: "mechoui",
    name: "Mechoui",
    image: require("../../assets/Mechoui.jpg"),
  },
  { id: "mosli", name: "Mosli", image: require("../../assets/Mosli.jpg") },
  {
    id: "makarouna",
    name: "Makarouna",
    image: require("../../assets/Makarouna.jpg"),
  },
  { id: "tajine", name: "Tajine", image: require("../../assets/Tajine.jpg") },
];

const FoodListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchText, setSearchText] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foodData);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSearch = useCallback(
    (text) => {
      setSearchText(text);
      const filtered = foodData.filter((food) =>
        food.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredFoods(filtered);
    },
    [foodData]
  );

  const canGoBack = route.name !== "FoodList";

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {}
        <View style={styles.topBar}>
          <Text style={styles.title}>Foods</Text>
          <View style={{ width: 24 }} />
        </View>
        {}
        <View style={styles.searchBarContainer}>
          <Icon
            name="search"
            size={18}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>

        {}
        <View style={styles.foodsHeaderImageContainer}>
          <Image
            source={require("../../assets/Food.png")}
            style={styles.foodsHeaderImage}
          />
        </View>

        {}
        <View style={styles.dishesTitleContainer}>
          <Text style={styles.dishesTitle}>Dishes</Text>
        </View>
        <ScrollView contentContainerStyle={styles.foodListContainer}>
          {filteredFoods.map((food) => (
            <TouchableOpacity
              key={food.id}
              style={styles.foodItem}
              onPress={() =>
                navigation.navigate("FoodDetail", { foodId: food.id })
              }
            >
              <Image source={food.image} style={styles.foodImageItem} />
              <Text style={styles.foodName}>{food.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 5,
    paddingRight: 1,
  },
  backButton: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 20,
    padding: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
    color: "#888",
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
  foodsHeaderImageContainer: {
    alignItems: "flex-start",
    marginLeft: 20,
    marginBottom: 20,
  },
  foodsHeaderImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  dishesTitleContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  dishesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  foodListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  foodItem: {
    width: "30%",
    marginBottom: 20,
    alignItems: "center",
  },
  foodImageItem: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    resizeMode: "cover",
  },
  foodName: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
});

export default FoodListScreen;
