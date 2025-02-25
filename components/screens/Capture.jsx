import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const CaptureScreen = () => {
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../../assets/car.png")}
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        <View
          style={{
            backgroundColor: "#3A50A2",
            padding: 15,
            borderRadius: 10,
            alignSelf: "center",
            width: "80%",
            position: "absolute",
            top: "35%",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Tunisia</Text>
          <Text style={{ color: "white", fontSize: 18, marginTop: 5 }}>
            karahba
          </Text>

          {/* Icons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <FontAwesome5 name="copy" size={18} color="white" />
            <FontAwesome5 name="share-alt" size={18} color="white" />
            <MaterialIcons name="volume-up" size={20} color="white" />
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default CaptureScreen;
