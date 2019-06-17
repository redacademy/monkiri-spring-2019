import React, { Component } from "react";
import Onboarding from "./Onboarding";
class OnboardingContainer extends Component {
  render() {
    return <Onboarding navigation={this.props.navigation} />;
  }
}

export default OnboardingContainer;
