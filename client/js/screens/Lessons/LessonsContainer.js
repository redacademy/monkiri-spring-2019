import React, { Component } from "react";
import { View, Text } from "react-native";
import ProgressInfoContainer from "../../screens/ProgressInfo";
class LessonsContainer extends Component {
  static navigationOptions = {
    title: "LESSONS"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Lessons Screen</Text>
      </View>
    );
  }
}

export default LessonsContainer;
