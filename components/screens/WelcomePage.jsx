import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={styles.nameBox}>
        <Text style={styles.nameText}>Chesmha</Text>
      </View>

      <Image
        source={require("../../assets/Untitled-removebg-preview.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        “Bridging the Gap in Tunisian Communication”
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E0F8",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  nameBox: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 35,
    fontWeight: "700",
    color: "#8359E3",
    fontFamily: "monospace",
    letterSpacing: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 40,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  grayDot: {
    backgroundColor: "#CCC",
  },
  purpleDot: {
    backgroundColor: "#8A4FFF",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8359E3",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default WelcomeScreen;
