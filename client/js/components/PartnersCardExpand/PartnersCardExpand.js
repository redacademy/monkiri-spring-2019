import React from "react";
import { View, Image, Linking, TouchableOpacity } from "react-native";
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
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.pipay.com/");
          }}
        >
          <Image key={index} source={icon} style={styles.icon} />
        </TouchableOpacity>
      ))}
    </View>
  ) : (
    <View />
  );
};
export default PartnersCardExpand;
