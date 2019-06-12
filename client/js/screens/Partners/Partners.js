import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation
} from "react-native";
import PartnersCard from "../../components/PartnersCard";
import PartnersCardExpand from "../../components/PartnersCardExpand";
import { styles } from "./styles";
const Partners = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    LayoutAnimation.easeInEaseOut();
    setIsOpen(!isOpen);
  };
  return (
    <ScrollView>
      <View style={styles.PartnersContainer}>
        <TouchableOpacity style={styles.PartnersCard} onPress={handleToggle}>
          <PartnersCard />
          <PartnersCardExpand isOpen={isOpen} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Partners;
