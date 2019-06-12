import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
const SignIn = ({ navigation }) => {
  return (
    <View style={styles.SignInContainer}>
      <Button title="Sign In" onPress={() => navigation.navigate("Layout")} />
    </View>
  );
};

export default SignIn;
