import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const PartnersCard = ({ data }) => {
  return (
    <View
      style={[styles.PartnersCardTop, { backgroundColor: `${data.color}` }]}
    >
      <Image style={styles.PartnersCardIcon} source={data.icon} />
      <Text style={styles.PartnersCardText}>{data.name}</Text>
      {data.isOpen ? (
        <Image
          style={styles.arrow}
          source={require("../../assets/images/arrow.png")}
        />
      ) : null}
      <View style={styles.triangle} />
    </View>
  );
};

export default PartnersCard;
