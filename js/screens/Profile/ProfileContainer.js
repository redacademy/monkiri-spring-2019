import React, { Component } from "react";
import { View, Text } from "react-native";

class ProfileContainer extends Component {
  static navigationOptions = {
    title: "PROFILE"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileContainer;
