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

const animalData = [
  { id: "dog", name: "Dog", image: require("../../assets/Dog.jpg") },
  { id: "cat", name: "Cat", image: require("../../assets/cat.jpg") },
  { id: "horse", name: "Horse", image: require("../../assets/horse.jpg") },
  { id: "lion", name: "Lion", image: require("../../assets/lion.jpg") },
  { id: "bear", name: "Bear", image: require("../../assets/bear.jpg") },
  {
    id: "giraffe",
    name: "Giraffe",
    image: require("../../assets/giraffe.jpg"),
  },
  { id: "turtle", name: "Turtle", image: require("../../assets/turtle.jpg") },
  {
    id: "gorilla",
    name: "Gorilla",
    image: require("../../assets/gorilla.jpg"),
  },
  { id: "frog", name: "Frog", image: require("../../assets/frog.jpg") },
  {
    id: "squirrel",
    name: "Squirrel",
    image: require("../../assets/squirrel.jpg"),
  },
  { id: "camel", name: "Camel", image: require("../../assets/camel.jpg") },
  { id: "sheep", name: "Sheep", image: require("../../assets/sheep.jpg") },
];

const AnimalListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchText, setSearchText] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState(animalData);

  const handleAnimalPress = useCallback(
    (animalId) => {
      navigation.navigate("AnimalDetail", { animalId });
    },
    [navigation]
  );

  const handleSearch = useCallback(
    (text) => {
      setSearchText(text);
      const filtered = animalData.filter((animal) =>
        animal.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredAnimals(filtered);
    },
    [animalData]
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const canGoBack = route.name !== "AnimalList";

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {}
        <View style={styles.topBar}>
          <Text style={styles.title}>Animals</Text>
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
        <View style={styles.animalsHeaderImageContainer}>
          <Image
            source={require("../../assets/Animals.png")}
            style={styles.animalsHeaderImage}
          />
        </View>

        {}
        <View style={styles.animalsTitleContainer}>
          <Text style={styles.animalsTitle}>Animals</Text>
        </View>
        <ScrollView contentContainerStyle={styles.animalListContainer}>
          {filteredAnimals.map((animal) => (
            <TouchableOpacity
              key={animal.id}
              style={styles.animalItem}
              onPress={() => handleAnimalPress(animal.id)}
            >
              <Image source={animal.image} style={styles.animalImageItem} />
              <Text style={styles.animalName}>{animal.name}</Text>
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
    paddingTop: 5,
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
  animalsHeaderImageContainer: {
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 20,
  },
  animalsHeaderImage: {
    width: "95%",
    height: 115,
    resizeMode: "contain",
  },
  animalsTitleContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  animalsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  animalListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  animalItem: {
    width: "30%",
    marginBottom: 20,
    alignItems: "center",
  },
  animalImageItem: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    resizeMode: "cover",
  },
  animalName: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
});

export default AnimalListScreen;
