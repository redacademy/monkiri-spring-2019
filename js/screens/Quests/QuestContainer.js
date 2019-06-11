import React, { Component } from "react";
import { View, Text } from "react-native";

class QuestContainer extends Component {
  static navigationOptions = {
    title: "QUESTS"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Quest Screen</Text>
      </View>
    );
  }
}

export default QuestContainer;
