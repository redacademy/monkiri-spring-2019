import React, { Component } from "react";
import { View, Text } from "react-native";
import SignIn from "./SignIn";

class SignInContainer extends Component {
  static navigationOptions = {
    title: "Sign In"
  };
  render() {
    return <SignIn navigation={this.props.navigation} />;
  }
}

export default SignInContainer;
