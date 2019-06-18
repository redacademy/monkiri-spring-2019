import React, { Component } from "react";
import Onboarding from "./Onboarding";
import { getOnboardStatus } from "../../config/models";
import Loader from "../../components/Loader";

class OnboardingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { onboardStatus: false };
  }

  async componentDidMount() {
    try {
      const onboardStatus = await getOnboardStatus();
      this.setState({ onboardStatus });
    } catch (e) {
      return e;
    }
  }

  render() {
    if (this.state.onboardStatus === false) return <Loader />;
    return (
      <Onboarding
        navigation={this.props.navigation}
        onboarding={!this.state.onboardStatus}
      />
    );
  }
}

export default OnboardingContainer;
