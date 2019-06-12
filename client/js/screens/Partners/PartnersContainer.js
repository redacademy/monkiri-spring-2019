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
    partnersIcon: [
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`)
    ],
    isOpen: false
  },
  {
    id: 2,
    name: "Saving",
    color: "#8cc63f",
    lightColor: "#c1ed85",
    icon: require(`../../assets/images/saving.png`),
    partnersIcon: [
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`)
    ],
    isOpen: false
  },
  {
    id: 3,
    name: "Investment",
    color: "#5ec9c9",
    lightColor: "#80d0cf",
    icon: require(`../../assets/images/investment.png`),
    partnersIcon: [
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`)
    ],
    isOpen: false
  },
  {
    id: 4,
    name: "International Money",
    color: "#c77fe9",
    lightColor: "#c798dc",
    icon: require(`../../assets/images/internationmoney.png`),
    partnersIcon: [
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`)
    ],
    isOpen: false
  },
  {
    id: 5,
    name: "Insurance",
    color: "#f1984e",
    lightColor: "#eab68a",
    icon: require(`../../assets/images/insurance.png`),
    partnersIcon: [
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`),
      require(`../../assets/images/pi-pay.png`)
    ],
    isOpen: false
  },
  {
    id: 4,
    name: "International Money",
    color: "#c77fe9",
    lightColor: "#c798dc",
    icon: require(`../../assets/images/internationmoney.png`),
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
