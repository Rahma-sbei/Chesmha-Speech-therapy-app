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

const SignUp = ({ navigation }) => {
  const url = "http://192.168.1.16:4000/api/users";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confpass, setconfpass] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    if (!email || !password || !username) {
      Alert.alert("Oops", "Please fill out all fields", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    } else if (password !== confpass) {
      setError(true);
    } else {
      e.preventDefault();

      const newUser = { userName: username, email: email, password: password };
      axios
        .post(url, newUser)
        .then((response) => {
          console.log(response.data);
          navigation.navigate("Onboard");
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={confpass}
          onChangeText={setconfpass}
          placeholder=" Confirm Password"
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
            Passwords do not match
          </Text>
        )}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={[styles.forgotPassword, { color: "#aaa" }]}>or</Text>
        <TouchableOpacity
          style={[styles.signUpWith, { paddingRight: 20 }]}
          onPress={handleLogin}
        >
          <Image
            source={require("../../assets/apple.png")}
            style={{
              width: 37,
              height: 37,
            }}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.loginButtonText,
              { fontWeight: 600, color: "rgb(0, 1, 42)" },
            ]}
          >
            Continue With Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpWith} onPress={handleLogin}>
          <Image
            source={require("../../assets/google.png")}
            style={{
              width: 33,
              height: 33,
            }}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.loginButtonText,
              { fontWeight: 600, color: "rgb(0, 1, 42)" },
            ]}
          >
            Continue With Google
          </Text>
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          Already have an account?{" "}
          <Pressable
            onPress={() => {
              navigation.navigate("LoginPage");
            }}
          >
            <Text style={styles.signUp}>Log In</Text>
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
    flex: 0.85,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    shadowColor: "rgb(0, 2, 140)",
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 30,
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
    shadowColor: "rgb(0, 2, 140)",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  signUpWith: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    backgroundColor: "rgba(170, 170, 170, 0.64)",
    padding: 10,
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

export default SignUp;
