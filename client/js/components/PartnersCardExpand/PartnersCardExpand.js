import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
const PartnersCardExpand = ({ data }) => {
  return data.isOpen ? (
    <View
      style={[
        styles.ExpandContainer,
        { backgroundColor: `${data.lightColor}` }
      ]}
    />
  ) : (
    <View />
  );
};
export default PartnersCardExpand;
