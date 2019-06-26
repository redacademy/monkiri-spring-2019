import React from "react";
import { View, Image, Linking, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
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
          key={index}
          onPress={() => {
            Linking.openURL("https://www.pipay.com/");
          }}
        >
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
      ))}
    </View>
  ) : (
    <View />
  );
};
PartnersCardExpand.propTypes = {
  data: PropTypes.object.isRequired
};
export default PartnersCardExpand;
