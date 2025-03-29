import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import axios from "axios";
import arabic_reshaper from "arabic-reshaper";
import bidi from "bidi"; // Using the bidi package

export default function Capture() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [detectedText, setDetectedText] = useState("");

  useEffect(() => {
    async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log("Capture function triggered");
      uploadToImagga(photo.uri);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setDetectedText("");
  };

  const apiKey = "acc_45392865d149c17";
  const apiSecret = "c70372d760e515c7ff3e083af7a6e62d";

  const translateText = async (text) => {
    try {
      const response = await axios.post("http://192.168.1.15:8000/translate/", {
        text: text,
      });

      console.log("Translated Text:", response.data.translated_text);
      return response.data.translated_text;
    } catch (error) {
      console.error("Error translating text:", error);
      return null;
    }
  };

  const uploadToImagga = async (imageUri) => {
    console.log("Sending to API --->");

    const formData = new FormData();

    formData.append("image", {
      uri: imageUri,
      name: "photo.jpg",
      type: "image/jpeg",
    });

    try {
      const response = await axios.post(
        "https://api.imagga.com/v2/tags",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          auth: {
            username: apiKey,
            password: apiSecret,
          },
        }
      );

      const res = response.data.result.tags[0]?.tag?.en;
      console.log("Imagga Response:", res);
      setDetectedText(translateText(res));
    } catch (error) {
      console.error(
        "Error uploading image:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" ref={cameraRef}>
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.buttonText}>Auto Detect</Text>
          </TouchableOpacity>
          <View style={styles.swapButtonContainer}>
            <Pressable style={styles.swapButton} onPress={takePicture}>
              <FontAwesome6 name="camera" size={24} color="white" />
            </Pressable>
          </View>
          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {detectedText ? (
                <Text style={styles.modalText}>
                  {bidi(arabic_reshaper.reshape(detectedText))}
                </Text>
              ) : (
                <Text style={styles.modalText}>Loading...</Text>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 80,
    // paddingTop: 60,
    // paddingBottom: 60,
    // paddingLeft: 80,
    // paddingRight: 80,
    backgroundColor: "#556BBE",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    textAlign: "right",
    writingDirection: "rtl",
    fontFamily: "Tajawal",
  },
});
