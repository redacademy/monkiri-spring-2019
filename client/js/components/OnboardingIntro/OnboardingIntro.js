import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
const OnboardingIntro = ({ introData }) => {
  return (
    <View style={styles.Container}>
      <Image style={styles.OnboardingBanner} source={introData.bannerImage} />
      <View style={styles.listsContainer}>
        {introData.lists.map((list, index) => (
          <View key={index} style={styles.lists}>
            <Image style={styles.icon} source={introData.listsIcon} />
            <Text style={styles.text}>{list}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
OnboardingIntro.propTypes = {
  introData: PropTypes.array.isRequired
};
export default OnboardingIntro;
