import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
const OnboardingThree = ({ navigation }) => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isSignInActive, setIsSignInActive] = useState(false);

  const handleReisterToggle = () => {
    setIsRegisterActive(!isRegisterActive);
    setIsSignInActive(false);
    // navigation.navigate("Layout");
  };
  const handleSignInToggle = () => {
    setIsSignInActive(!isSignInActive);
    setIsRegisterActive(false);
  };

  return (
    <View style={styles.root}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/onBoarding/logo.png")}
      />
      <Text style={styles.subtitle}>Start Growing</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={isRegisterActive ? styles.activeButton : styles.button}
          onPress={handleReisterToggle}
        >
          <Text
            style={
              isRegisterActive ? styles.activeButtonText : styles.buttonText
            }
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isSignInActive ? styles.activeButton : styles.button}
          onPress={handleSignInToggle}
        >
          <Text
            style={isSignInActive ? styles.activeButtonText : styles.buttonText}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
};

export default OnboardingThree;
