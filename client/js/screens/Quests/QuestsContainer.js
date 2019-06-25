import React, { Component } from "react";
import Quests from "./Quests";

class QuestsContainer extends Component {
  static navigationOptions = {
    title: "QUESTS"
  };

  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

  switchTab = tabIndex => {
    this.setState({ tabIndex });
  };
  render() {
    return <Quests tabIndex={this.state.tabIndex} switchTab={this.switchTab} />;
  }
}

export default QuestsContainer;
