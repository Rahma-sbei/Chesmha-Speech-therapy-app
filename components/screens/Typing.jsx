import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Typing = () => {
  return (
    <View style={styles.container}>
      {/* Back & Menu Icons */}
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={20} color="black" />
        <FontAwesome name="bars" size={20} color="black" />
      </View>

      {/* Top Translation Box */}
      <View
        style={[styles.translationBox, styles.selectedBox, { marginTop: 20 }]}
      >
        <Text style={styles.languageLabel}>English</Text>
        <Text style={styles.translationText}>
          Serangan terhadap warga Asia New York baru-baru ini menyebabkan empat
          kematian. Yao Pan Ma, seorang imigran Cina
        </Text>
      </View>

      {/* Bottom Translation Box */}
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
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>

        {/* Swap Button Positioned on Top */}
        <View style={styles.swapButtonContainer}>
          <TouchableOpacity style={styles.swapButton}>
            <FontAwesome6 name="arrows-rotate" size={24} color="white" />
          </TouchableOpacity>
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
    gap: 60,
    alignItems: "center",
    backgroundColor: "rgba(130, 89, 227, 0.73)",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    position: "absolute",
    bottom: 40,
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
