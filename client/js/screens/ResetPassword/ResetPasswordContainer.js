import React, { Component } from "react";
import ResetPassword from "./ResetPassword";

class ResetPasswordContainer extends Component {
  static navigationOptions = {
    title: "ResetPassword"
  };

  render() {
    return <ResetPassword navigation={this.props.navigation} />;
  }
}

export default ResetPasswordContainer;
