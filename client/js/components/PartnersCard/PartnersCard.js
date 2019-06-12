import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const PartnersCard = () => {
  return (
    <View style={styles.PartnersCardTop}>
      <Image
        style={styles.PartnersCardIcon}
        source={require("../../assets/images/mobilewallet.png")}
      />
      <Text style={styles.PartnersCardText}>Mobile Wallet</Text>
    </View>
  );
};

export default PartnersCard;
