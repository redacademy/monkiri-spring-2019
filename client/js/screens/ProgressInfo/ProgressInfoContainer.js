import React, { Component } from "react";
import ProgressInfo from "./ProgressInfo";
class ProgressInfoContainer extends Component {
  static navigationOptions = {
    title: "Saving"
  };
  render() {
    return <ProgressInfo navigation={this.props.navigation} />;
  }
}

export default ProgressInfoContainer;
