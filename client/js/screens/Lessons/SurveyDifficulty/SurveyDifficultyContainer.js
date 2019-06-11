import React, { Component } from "react";
import { View, Text } from "react-native";

class SurveyDifficultyContainer extends Component {
  static navigationOptions = {
    title: "LESSONS"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>What's your level of financial knowledge?</Text>
      </View>
    );
  }
}

export default SurveyDifficultyContainer;
