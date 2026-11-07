import React, { useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const plantDetails = {
  sunflower: {
    name: "Sunflower",
    arabicName: "عباد الشمس",
    image: require("../../assets/Sunflower.png"),
    description:
      "The sunflower or Helianthus Annuus is a native plant of North America. The word helianthus refers to a plant which turns its flowers and leaves to the sun and the name Helianthus Annuus comes from the Greek language, with helios meaning sun, anthus meaning flower and annuus meaning annual.\n\n" +
      "Uses:\n" +
      "1. Agriculture:\n" +
      "   Oil Production: Sunflower seeds are a significant source of high-quality vegetable oil.\n" +
      "2. Food and Cooking:\n" +
      "   Edible Seeds: Sunflower seeds are consumed as a snack or added to various dishes.\n" +
      "3. Erosion Control:\n" +
      "   Land Stabilization: Sunflowers' strong root systems help prevent soil erosion.\n" +
      "4. Renewable Resources:\n" +
      "   Biomass: Sunflower stems and leaves can be used for biomass and bioenergy.",
  },
  lavender: {
    name: "Lavender",
    arabicName: "الخزامى",
    image: require("../../assets/lavender.png"),
    description:
      "Lavender is a flowering plant in the mint family known for its fragrant purple flowers. It is native to the Mediterranean region.\n\n" +
      "Uses:\n" +
      "1. Aromatherapy: Lavender oil is used for its calming properties.\n" +
      "2. Culinary: Used in teas and baked goods.\n" +
      "3. Cosmetics: Used in soaps and lotions.",
  },
  rose: {
    name: "Rose",
    arabicName: "وردة",
    image: require("../../assets/rose.png"),
    description:
      "Roses are perennial flowering plants in the genus Rosa, in the family Rosaceae. There are over 300 species and thousands of cultivars.\n\n" +
      "Uses:\n" +
      "1. Ornamental: Roses are widely grown for their beautiful flowers.\n" +
      "2. Perfumery: Rose oil is used in perfumes and cosmetics.\n" +
      "3. Culinary: Rose petals can be used to make jams, jellies, and teas.",
  },
  dahlia: {
    name: "Dahlia",
    arabicName: "أضاليا",
    image: require("../../assets/Dahlia.png"),
    description:
      "Dahlias are perennial plants with tuberous roots, native to Mexico. There are at least 36 species of dahlia, with hybrids commonly grown as garden plants.\n\n" +
      "Uses:\n" +
      "1. Ornamental: Dahlias are grown for their showy flowers, which come in a wide variety of colors and forms.\n" +
      "2. Cut Flowers: Dahlias are popular as cut flowers due to their long vase life.",
  },
  iris: {
    name: "Iris",
    arabicName: "زنبق",
    image: require("../../assets/iris.png"),
    description:
      "Iris is a genus of 260–300 species of flowering plants with showy flowers. It takes its name from the Greek word for a rainbow.\n\n" +
      "Uses:\n" +
      "1. Ornamental: Irises are widely cultivated as ornamental plants in gardens and landscapes.\n" +
      "2. Perfumery: The roots of some iris species are used to produce orris root, which is used in perfumery.\n" +
      "3. Medicinal: In traditional medicine, iris has been used for various ailments.",
  },
  aloe: {
    name: "Aloe vera",
    arabicName: "صبار",
    image: require("../../assets/Aloe vera.png"),
    description:
      "Aloe vera is a succulent plant species of the genus Aloe. It grows wild in tropical climates around the world.\n\n" +
      "Uses:\n" +
      "1. Medicinal: Aloe vera gel is widely known for its skin-soothing and healing properties.\n" +
      "2. Cosmetics: Aloe vera is a common ingredient in skincare products, cosmetics, and hair care products.\n" +
      "3. Food and Beverage: Aloe vera juice is consumed for its potential health benefits.",
  },
  alstroemeria: {
    name: "Alstroemeria",
    arabicName: "ألسيتروميريا",
    image: require("../../assets/alstroemeria.png"),
    description:
      "Alstroemeria, commonly called the Peruvian lily or lily of the Incas, is a genus of flowering plants in the family Alstroemeriaceae.\n\n" +
      "Uses:\n" +
      "1. Ornamental: Alstroemerias are popular as cut flowers due to their long vase life and vibrant colors.\n" +
      "2. Floristry: They are frequently used in floral arrangements and bouquets.\n" +
      "3. Garden Plants: Alstroemerias are also grown as garden plants for their attractive flowers.",
  },
  tulip: {
    name: "Tulip",
    arabicName: "زنبق",
    image: require("../../assets/tulip.png"),
    description:
      "Tulips are perennial herbaceous bulbiferous geophytes, native to a band stretching from Southern Europe to Central Asia.\n\n" +
      "Uses:\n" +
      "1. Ornamental: Tulips are popular garden plants and cut flowers, prized for their bright and colorful blooms.\n" +
      "2. Floristry: They are commonly used in floral arrangements and bouquets.\n" +
      "3. Historical Significance: Tulips played a significant role in the Dutch Golden Age during the Tulip Mania.",
  },
  azalea: {
    name: "Azalea",
    arabicName: "أزاليا",
    image: require("../../assets/Azalea.png"),
    description:
      "Azaleas are flowering shrubs in the genus Rhododendron, particularly the former subgenus Pentanthera. They bloom in the spring.\n\n" +
      "Uses:\n" +
      "1. Ornamental: Azaleas are popular garden plants, known for their showy and colorful flowers.\n\n" +
      "3. Cultural Significance: Azaleas are celebrated in various cultural festivals and events.",
  },
  orchid: {
    name: "Orchid",
    arabicName: "أوركيد",
    image: require("../../assets/orchid.jpg"),
    description:
      "Orchids are a diverse and widespread family of flowering plants, with blooms that are often colorful and fragrant.\n\n" +
      "Uses:\n" +
      "1. Ornamental: Orchids are highly prized as ornamental plants and are grown for their exotic and beautiful flowers.\n\n" +
      "3. Perfumery: Some orchids are used in perfumery for their fragrance.",
  },
  daisy: {
    name: "Daisy",
    arabicName: "أقحوان",
    image: require("../../assets/Daisy.png"),
    description:
      "Daisies are flowering plants in the family Asteraceae. They are characterized by a central disc surrounded by petals.\n\n" +
      "Uses:\n" +
      "1. Ornamental: Daisies are grown for their simple yet charming flowers in gardens and meadows.\n\n" +
      "3. Culinary: Daisy petals and leaves can be eaten in salads and other dishes.",
  },
  peonies: {
    name: "Peonies",
    arabicName: "فاوانيا",
    image: require("../../assets/peonies.png"),
    description:
      "Peonies are flowering plants in the genus Paeonia, native to Asia, Europe, and Western North America. They are known for their large, showy flowers.\n\n" +
      "Uses:\n\n" +
      "3. Symbolism: Peonies are often associated with prosperity, good fortune, and romance.",
  },
};

const PlantDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { plantId } = route.params;
  const plant = plantDetails[plantId];

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSave = useCallback(() => {
    Alert.alert("Save", "Plant saved!");
  }, []);

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text>Plant not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image source={plant.image} style={styles.plantImage} />

        {}
        <View style={styles.nameCard}>
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantArabicName}>{plant.arabicName}</Text>
        </View>

        {}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{plant.description}</Text>
        </View>

        {}
        <TouchableOpacity style={styles.nextButton} onPress={() => {}}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
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
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
    padding: 5,
  },
  saveButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
    padding: 5,
  },
  plantImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginTop: 70,
  },
  nameCard: {
    backgroundColor: "rgba(248, 248, 255, 0.7)",
    padding: 10,
    borderRadius: 10,
    margin: 20,
  },
  plantName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  plantArabicName: {
    fontSize: 24,
    textAlign: "right",
    color: "black",
  },
  descriptionContainer: {
    padding: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  nextButton: {
    backgroundColor: "#9370DB",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    margin: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PlantDetailScreen;
