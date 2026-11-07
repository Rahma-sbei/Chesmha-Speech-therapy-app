import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import axios from "axios";
import { Audio } from "expo-av";

const AudioPlaying = () => {
  const [text, setText] = useState("");
  const clearText = () => {
    setText("");
  };

  const pronounceText = async (text) => {
    try {
      const dbResponse = await axios.post(
        "http://192.168.1.15:7000/generate_speech/",
        { text: text }
      );
      const audioUrl = "http://192.168.1.15:7000/get_audio/";

      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      );

      await sound.playAsync();
    } catch (dbError) {
      console.error("Error pronouncing this text", dbError);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 100,
          alignItems: "center",
          marginBottom: 10,
          marginTop: 60,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            styles.playAudio,
            pressed && { backgroundColor: "rgb(109, 74, 197)" },
          ]}
          onPress={() => pronounceText(text)}
        >
          <Text style={styles.playText}>Play Back</Text>
          <FontAwesome
            name="volume-up"
            size={25}
            color="white"
            style={{ marginTop: 3 }}
          />
        </Pressable>
      </View>

      <View style={styles.translationBox}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.languageLabel}>Tunisian</Text>
          <Pressable onPress={clearText}>
            <FontAwesome6 name="xmark" size={20} color="grey" />
          </Pressable>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter tunisian text to hear..."
          value={text}
          onChangeText={(inputText) => {
            setText(inputText);
          }}
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.buttonText}>Auto Detect</Text>
        </TouchableOpacity>

        <View style={styles.swapButtonContainer}>
          <Pressable
            style={styles.swapButton}
            onPress={() => pronounceText(text)}
          >
            <FontAwesome6 name="microphone" size={24} color="white" />
          </Pressable>
        </View>

        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },

  // Header icons
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  translationBox: {
    backgroundColor: "rgba(212, 181, 212, 0.78)",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },

  selectedBox: { borderWidth: 2, borderColor: "#7E57C2" },
  languageLabel: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  input: {
    fontSize: 17,
    color: "white",
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "right",
    writingDirection: "rtl",
    direction: "rtl",
    height: 150,
  },
  iconRow: { flexDirection: "row", gap: 15, marginTop: 10 },

  // Bottom Bar
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 80,
    alignItems: "center",
    backgroundColor: "rgba(130, 89, 227, 0.73)",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    position: "absolute",
    bottom: 80,
    left: 20,
    right: 20,
  },
  languageButton: { flex: 1, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 17 },

  playAudio: {
    width: 200,
    height: 70,
    backgroundColor: "rgb(162, 138, 218)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 4.5,
    elevation: 20,
    flexDirection: "row",
    gap: 15,
  },
  playText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 4,
  },
  // Swap Button Styling
  swapButtonContainer: {
    position: "absolute",
    top: -15, // Pushes it above the bar
    left: "50%",
    transform: [{ translateX: -19 }], // Centers it horizontally
  },
  swapButton: {
    backgroundColor: "#5736E9",
    width: 80, // Bigger than the bar
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default AudioPlaying;
