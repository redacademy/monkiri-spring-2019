import React, { Component } from "react";
import { View, Text } from "react-native";

class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Libray"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Partners Screen</Text>
      </View>
    );
  }
}

export default LessonLibraryContainer
