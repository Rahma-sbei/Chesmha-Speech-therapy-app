import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import axios from "axios";

const Typing = () => {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 200);

    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    if (debouncedText.trim() !== "") {
      translateText(debouncedText);
    } else {
      setTranslation("");
    }
  }, [debouncedText]);

  const translateText = async (text) => {
    const dbtext = text.toLowerCase();
    try {
      const dbResponse = await axios.post(
        "http://192.168.1.15:4000/api/gettranslation",
        {
          name: dbtext,
        }
      );

      if (dbResponse.data && dbResponse.data.translation) {
        console.log(
          "Translation found in database:",
          dbResponse.data.translation
        );
        return setTranslation(dbResponse.data.translation);
      }
    } catch (dbError) {
      console.error("Error fetching translation from database:", dbError);
    }

    try {
      const response = await axios.post("http://192.168.1.15:8000/translate/", {
        text: text,
      });

      console.log(
        "Translated Text from external API:",
        response.data.translated_text
      );
      return setTranslation(response.data.translated_text);
    } catch (apiError) {
      console.error("Error translating text using external API:", apiError);
      return null;
    }
  };

  const clearText = () => {
    setText("");
    setTranslation("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.translationBox}>
        <Text style={styles.languageLabel}>English</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text to translate..."
          value={text}
          onChangeText={(inputText) => {
            setText(inputText);
          }}
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
        />
      </View>

      <View
        style={[
          styles.translationBox,
          {
            backgroundColor: "#A7ADF9",
            borderColor: "#aaa",
            borderWidth: 1,
            height: 150,
          },
        ]}
      >
        <Text style={styles.languageLabel}>Tunisia</Text>
        <Text style={styles.translationText}>
          {translation || "Translation will appear here..."}
        </Text>
        <View style={styles.iconRow}>
          <FontAwesome name="volume-up" size={16} color="gray" />
        </View>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>

        <View style={styles.swapButtonContainer}>
          <Pressable style={styles.swapButton} onPress={clearText}>
            <FontAwesome6 name="xmark" size={40} color="white" />
          </Pressable>
        </View>

        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.buttonText}>Tunisia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20, marginTop: 30 },

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

  languageLabel: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  translationText: {
    fontSize: 17,
    color: "white",
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "right",
    writingDirection: "rtl",
    direction: "rtl",
  },
  iconRow: { flexDirection: "row", gap: 15, marginTop: 10 },
  input: {
    color: "rgb(92, 91, 93)",
    fontSize: 16,
    height: 100,
    lineHeight: 35,
    fontWeight: 500,
  },
  // Bottom Bar
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 60,
    alignItems: "center",
    backgroundColor: "rgba(130, 89, 227, 0.73)",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
  },
  languageButton: { flex: 1, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 17 },

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

export default Typing;
