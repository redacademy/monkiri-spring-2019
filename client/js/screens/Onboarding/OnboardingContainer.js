import React, { Component } from "react";
import Onboarding from "./Onboarding";
import { getOnboardStatus, setOnboardStatus } from "../../config/models";
import Loader from "../../components/Loader";

class OnboardingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { onboardStatus: null };
  }

  async componentDidMount() {
    try {
      const onboardStatus = await getOnboardStatus();
      if (!onboardStatus) {
        await setOnboardStatus();
        this.setState({ onboardStatus: false });
      } else {
        this.setState({ onboardStatus: true });
      }
    } catch (e) {
      return e;
    }
  }

  render() {
    if (this.state.onboardStatus === null) return <Loader />;
    return (
      <Onboarding
        navigation={this.props.navigation}
        onboarding={!this.state.onboardStatus}
      />
    );
  }
}

export default OnboardingContainer;
