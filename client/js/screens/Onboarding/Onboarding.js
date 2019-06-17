import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Swiper from "react-native-swiper";
import OnboardingOne from "../../components/OnboardingOne";
import OnboardingTwo from "../../components/OnboardingTwo";
import OnboardingThree from "../../components/OnboardingThree";
const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Swiper
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        loop={false}
      >
        <OnboardingOne />
        <OnboardingTwo />
        <OnboardingThree navigation={navigation} />
      </Swiper>
    </View>
  );
};

export default Onboarding;
