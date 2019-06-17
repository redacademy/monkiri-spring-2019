import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Swiper from "react-native-swiper";
import { OnboardingData } from "../../helpers/onboarding";
import OnboardingIntro from "../../components/OnboardingIntro";
import OnboardingAuth from "../../components/OnboardingAuth";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Swiper
        dot={<View style={styles.progressCircle} />}
        activeDot={<View style={styles.activeDot} />}
        loop={false}
      >
        <OnboardingIntro introData={OnboardingData[0]} />
        <OnboardingIntro introData={OnboardingData[1]} />
        <OnboardingAuth navigation={navigation} />
      </Swiper>
    </View>
  );
};

export default Onboarding;
