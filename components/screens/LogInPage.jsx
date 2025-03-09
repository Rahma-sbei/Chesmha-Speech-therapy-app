import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Pressable,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = ({ navigation }) => {
  const url = "http://192.168.49.35:4000/api/signIn";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handlePasswordChange = (text) => {
    setPassword(text);
    setError(false);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Oops", "Please enter both email and password", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    } else {
      const user = { email: email, password: password };

      axios
        .post(url, user)
        .then((response) => {
          const token = response.data.token;
          navigation.navigate("Onboard");
          AsyncStorage.setItem("token", token);
        })
        .catch((error) => {
          console.log("There was an error!", error);
          setError(true);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/login.png")}
          style={{
            width: 250,
            height: 250,
            marginBottom: 20,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
          secureTextEntry
          style={[
            styles.input,
            error
              ? {
                  marginBottom: 0,
                  borderWidth: 2,
                  borderColor: "rgb(225, 3, 3)",
                }
              : {},
          ]}
        />
        {error && (
          <Text
            style={{
              fontsize: 10,
              color: "rgb(225, 3, 3)",
              marginLeft: 10,
              marginBottom: 10,
            }}
          >
            Wrong password. Try again or reset your password
          </Text>
        )}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          Don't have an account?
          <Pressable
            onPress={() => {
              navigation.navigate("SignUp");
            }}
            style={{
              marginTop: 5,
              marginLeft: 10,

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.signUp}>Sign Up</Text>
          </Pressable>
        </Text>
      </View>
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
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  placeholderImage: {
    fontSize: 60,
  },
  card: {
    backgroundColor: "white",
    width: "85%",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#8A4FFF",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#8A4FFF",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 15,
  },
  signUpText: {
    textAlign: "center",
    fontSize: 14,
    color: "#888",
  },
  signUp: {
    color: "#8A4FFF",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#8A4FFF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginPage;
