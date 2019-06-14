import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
const OnboardingOne = () => {
  const [lists, setLists] = useState([
    "Discover financial services that meet your needs",
    "Find local financial providers",
    "Redeem real life rewards"
  ]);
  return (
    <View style={styles.Container}>
      <Image
        style={styles.OnboardingBanner}
        source={require("../../assets/images/onBoarding/onboarding02.png")}
      />
      <View style={styles.listsContainer}>
        {lists.map((list, index) => (
          <View key={index} style={styles.lists}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/onBoarding/green_leaf.png")}
            />
            <Text style={styles.text}>{list}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default OnboardingOne;
