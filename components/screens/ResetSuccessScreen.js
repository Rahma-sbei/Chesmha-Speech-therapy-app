import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ResetSuccessScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/successful.png")}
        style={styles.image} 
      />
      <Text style={styles.title}>Reset successful</Text>
      <Text style={styles.subtitle}>You can now log in to your account</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OTPVerification")}
      >
        <Text style={styles.buttonText}>Login Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FD",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: "#8359E3",
  },
  image: {
    width: 90, 
    height: 90, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A4A4A",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#7A7A7A",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#8359E3",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
