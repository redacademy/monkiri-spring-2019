import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const PartnersCard = ({ data }) => {
  return (
    <View
      style={[styles.PartnersCardTop, { backgroundColor: `${data.color}` }]}
    >
      <Image style={styles.PartnersCardIcon} source={data.icon} />
      <Text style={styles.PartnersCardText}>Mobile Wallet</Text>
    </View>
  );
};

export default PartnersCard;
