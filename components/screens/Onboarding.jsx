import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

const onboardingData = [
  {
    id: 1,
    title: "Camera Recognition",
    description:
      "Point your camera at an object to translate its name into Tunisian Arabic.",
    image: require("../../assets/cam1-removebg-preview.png"),
  },
  {
    id: 2,
    title: "Instant Translation",
    description: "Get accurate translations instantly.",
    image: require("../../assets/ph-removebg-preview.png"),
  },
  {
    id: 3,
    title: "Save & Learn",
    description: "Bookmark words and review them later.",
    image: require("../../assets/hn-removebg-preview.png"),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate("WelcomePage");
    }
  };

  const handleSwipeLeft = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/Screenshot 2025-02-24 210859.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <GestureRecognizer
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          gap: 10,
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={onboardingData[currentIndex].image}
            style={styles.image}
          />
        </View>

        <Text style={styles.title}>{onboardingData[currentIndex].title}</Text>
        <Text style={styles.description}>
          {onboardingData[currentIndex].description}
        </Text>

        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: index === currentIndex ? "#8A4FFF" : "#ccc",
                },
              ]}
            />
          ))}
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>
              {currentIndex === onboardingData.length - 1 ? "Finish" : "Next"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            <Text
              style={{
                color: "#aaa",
                fontWeight: "500",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              skip
            </Text>
          </TouchableOpacity>
        </View>
      </GestureRecognizer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  backText: {
    fontSize: 20,
    color: "#333",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    marginTop: 20,

    width: 270,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  pagination: {
    marginTop: 60,
    flexDirection: "row",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: "#8A4FFF",
    padding: 12,
    borderRadius: 15,
    alignItems: "center",
    width: "35%",
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
