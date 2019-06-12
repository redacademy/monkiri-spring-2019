import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
const PartnersCardExpand = ({ data }) => {
  return data.isOpen ? (
    <View
      style={[
        styles.ExpandContainer,
        { backgroundColor: `${data.lightColor}` }
      ]}
    >
      {data.partnersIcon.map((icon, index) => (
        <Image key={index} source={icon} style={styles.icon} />
      ))}
    </View>
  ) : (
    <View />
  );
};
export default PartnersCardExpand;
