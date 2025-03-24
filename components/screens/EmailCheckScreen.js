import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EmailCheckScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]); 
  const inputRefs = useRef([]);

  
  const handleOTPChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

 
  const handleBackspace = (index) => {
    if (!otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/email.png")} 
        style={styles.image}
      />
      <Text style={styles.title}>Check your mail</Text>
      <Text style={styles.subtitle}>
        We just sent an OTP to your registered email address
      </Text>

      <View style={styles.otpBoxesContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(value) => handleOTPChange(index, value)}
            value={digit}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
            ref={(ref) => (inputRefs.current[index] = ref)} 
          />
        ))}
      </View>
      <Text style={styles.resendText}>
        Didn't get a code? <Text style={styles.resendLink}>Resend</Text>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OTPVerification")}
      >
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
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
    position: 'absolute',
    top: 20,
    left: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#8359E3', 
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8359E3", 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  otpBoxesContainer: {
    flexDirection: "row",
    marginBottom: 20,
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
  resendLink: {
    color: "#8359E3", 
    fontWeight: "bold",
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
