import React, { Component } from "react";
import { View, Text } from "react-native";
import Calculator from "../../components/Calculator";

class QuestsContainer extends Component {
  static navigationOptions = {
    title: "QUESTS"
  };
  render() {
    return <Calculator />;
  }
}

export default QuestsContainer;
