import React from "react";
import { View, ScrollView } from "react-native";
import PartnersCard from "../../components/PartnersCard";
import PartnersCardExpand from "../../components/PartnersCardExpand";
import { styles } from "./styles";
const Partners = () => {
  return (
    <ScrollView>
      <View style={styles.PartnersContainer}>
        <View style={styles.PartnersCard}>
          <PartnersCard />
          <PartnersCardExpand />
        </View>
      </View>
    </ScrollView>
  );
};

export default Partners;
