import React, { Component } from "react";
import { View } from "react-native";
import Partners from "./Partners";
import { InitailData } from "../../helpers/partners.js";

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
