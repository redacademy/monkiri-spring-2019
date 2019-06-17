import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import theme from "../../config/styles";

const AuthLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.activeOrange} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default AuthLoader;
