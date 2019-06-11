import React, { Component } from "react";
import { View, Text } from "react-native";
class PartnersContianer extends Component {
  static navigationOptions = {
    title: "PARTNERS"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Partners Screen</Text>
      </View>
    );
  }
}

export default PartnersContianer;
