import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
const OnboardingOne = () => {
  const [lists, setLists] = useState([
    "Learn about finances",
    "Grow your knowledge",
    "Take quests and earn rewards"
  ]);
  return (
    <View style={styles.Container}>
      <Image
        style={styles.OnboardingBanner}
        source={require("../../assets/images/onBoarding/onboarding01.png")}
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
