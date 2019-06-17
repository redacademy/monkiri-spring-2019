import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import theme from "../../config/styles";
import PropTypes from "prop-types";

const AuthLoader = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.activeOrange} />
      <Text style={styles.text}>{`${message}...`}</Text>
    </View>
  );
};

AuthLoader.proptypes = {
  message: PropTypes.string.isRequired
};

export default AuthLoader;
