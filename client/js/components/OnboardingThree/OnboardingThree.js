import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
const OnboardingThree = ({ navigation }) => {
  const handleReisterClick = () => {
    navigation.navigate("Layout");
  };
  const handleSignInClick = () => {
    navigation.navigate("Layout");
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
          style={styles.activeButton}
          onPress={handleReisterClick}
        >
          <Text style={styles.activeButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.activeButton}
          onPress={handleSignInClick}
        >
          <Text style={styles.activeButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
};

export default OnboardingThree;
