import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import theme from "../../config/styles";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.activeOrange} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loader;
