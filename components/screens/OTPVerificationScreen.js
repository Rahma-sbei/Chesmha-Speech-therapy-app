import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard, 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OTPVerificationScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      Keyboard.dismiss();
      navigation.navigate("PasswordReset");
    }
  };

  const handleBackspace = (index) => {
    if (!otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>OTP Verification</Text>
      <Image source={require("../assets/otp.png")} style={styles.image} />
      <Text style={styles.subtitle}>Please enter OTP verification</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(value) => handleOTPChange(index, value)}
            value={digit}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                handleBackspace(index);
              }
            }}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <Text style={styles.resendText}>
        Resend OTP Again in <Text style={styles.timer}>00:30</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F8F8FF",
    paddingTop: 60,
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
  otpContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  otpBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#E0E0E0",
  },
  resendText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  timer: {
    fontWeight: "bold",
  },
});
