import React, { Component } from "react";
import { View } from "react-native";
import Partners from "./Partners";
class PartnersContainer extends Component {
  static navigationOptions = {
    title: "PARTNERS"
  };
  render() {
    return (
      <View>
        <Partners />
      </View>
    );
  }
}

export default PartnersContainer;
