import React, { Component } from "react";
import { View } from "react-native";
import Partners from "./Partners";

const InitailData = [
  {
    id: 1,
    name: "Mobile Wallet",
    color: "#f2c249",
    lightColor: "#f8e0a4",
    icon: require(`../../assets/images/mobilewallet.png`),

    isOpen: false
  },
  {
    id: 2,
    name: "Saving",
    color: "#8cc63f",
    lightColor: "#c1ed85",
    icon: require(`../../assets/images/saving.png`),
    isOpen: false
  },
  {
    id: 3,
    name: "Investment",
    color: "#5ec9c9",
    lightColor: "#80d0cf",
    icon: require(`../../assets/images/investment.png`),
    isOpen: false
  }
];

class PartnersContainer extends Component {
  static navigationOptions = {
    title: "PARTNERS"
  };
  render() {
    return (
      <View>
        <Partners InitailData={InitailData} />
      </View>
    );
  }
}

export default PartnersContainer;
