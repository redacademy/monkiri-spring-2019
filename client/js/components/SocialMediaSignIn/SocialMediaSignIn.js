import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
const SocialMediaSignIn = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.text}>Or Sign in with:</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Image
          source={require("../../assets/images/facebook.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/images/google.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default SocialMediaSignIn;
