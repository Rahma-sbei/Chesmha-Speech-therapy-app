import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Audio = () => {
  return (
    <View style={styles.container}>
      {/* Back & Menu Icons */}
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={20} color="black" />
        <FontAwesome name="bars" size={20} color="black" />
      </View>

      <View
        style={{
          height: 100,
          alignItems: "center",
          marginBottom: 40,
          marginTop: 20,
        }}
      >
        <Image
          source={require("../../assets/Screenshot_2025-02-24_225728-removebg-preview.png")}
          style={{
            width: 320,
            height: 110,
            marginLeft: 10,
            paddingTop: 0,
          }}
          resizeMode="contain"
        />
      </View>

      <View
        style={[
          styles.translationBox,
          { backgroundColor: "#A7ADF9", borderColor: "#aaa", borderWidth: 1 },
        ]}
      >
        <Text style={styles.languageLabel}>Tunisia</Text>
        <Text style={styles.translationText}>
          Serangan terhadap warga Asia New York baru-baru ini menyebabkan empat
          kematian. Yao Pan Ma, seorang imigran Cina
        </Text>
        <View style={styles.iconRow}>
          <FontAwesome name="copy" size={16} color="gray" />
          <FontAwesome name="volume-up" size={16} color="gray" />
        </View>
      </View>

      {/* Bottom Language Switch Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.buttonText}>Auto Detect</Text>
        </TouchableOpacity>

        {/* Swap Button Positioned on Top */}
        <View style={styles.swapButtonContainer}>
          <TouchableOpacity style={styles.swapButton}>
            <FontAwesome6 name="arrows-rotate" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20, marginTop: 30 },

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
  translationText: {
    fontSize: 17,
    color: "white",
    fontWeight: 500,
    lineHeight: 35,
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

export default Audio;
