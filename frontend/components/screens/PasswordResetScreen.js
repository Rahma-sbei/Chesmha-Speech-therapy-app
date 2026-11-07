import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PasswordResetScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>&lt; Back</Text>
        </TouchableOpacity>
        <Image
          source={require("../../assets/passeword.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Reset your password</Text>
        <Text style={styles.subtitle}>
          For security, use a mix of numbers, uppercase and lowercase letters,
          and special characters
        </Text>

        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Ex: Jamelia@123"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ResetSuccess")}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8FF",
    paddingTop: 60,
    justifyContent: "flex-start",
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8359E3",
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 15,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#8359E3",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
