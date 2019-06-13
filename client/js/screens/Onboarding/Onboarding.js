import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Swiper from "react-native-swiper";
const Onboarding = () => {
  return (
    <View style={{ flex: 1 }}>
      <Swiper
        dot={
          <View
            style={{
              borderWidth: 2,
              borderColor: "#54bed9",
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#54bed9",
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7
            }}
          />
        }
        paginationStyle={{
          bottom: 70
        }}
        loop={false}
      >
        <View>
          <Text>Onboarding Screen 01</Text>
        </View>
        <View>
          <Text>Onboarding Screen 02</Text>
        </View>
        <View>
          <Text>Onboarding Screen 03</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default Onboarding;
