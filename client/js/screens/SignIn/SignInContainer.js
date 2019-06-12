import React from "react";
import { View, Text } from "react-native";
import SignIn from "./SignIn";
class SignInContainer extends Component {
  static navigationOptions = {
    title: "Sign In"
  };
  render() {
    return <SignIn />;
  }
}

export default SignInContainer;
