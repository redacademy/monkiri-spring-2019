import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
const PartnersCardExpand = ({ isOpen }) => {
  return isOpen ? <View style={styles.ExpandContainer} /> : <View />;
};
export default PartnersCardExpand;
