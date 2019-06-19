import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Swiper from "react-native-swiper";
import { OnboardingData } from "../../helpers/onboarding";
import OnboardingIntro from "../../components/OnboardingIntro";
import OnboardingAuth from "../../components/OnboardingAuth";
import PropTypes from "prop-types";

const Onboarding = ({ navigation, onboarding }) => {
  if (onboarding) {
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
  } else {
    return (
      <View style={styles.root}>
        <Swiper
          dot={<View style={styles.progressCircle} />}
          activeDot={<View style={styles.activeDot} />}
          loop={false}
        >
          <OnboardingAuth navigation={navigation} />
        </Swiper>
      </View>
    );
  }
};

Onboarding.proptypes = {
  navigation: PropTypes.array.isRequired,
  onboarding: PropTypes.bool.isRequired
};

export default Onboarding;
