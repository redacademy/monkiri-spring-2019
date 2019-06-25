import React, { Component } from "react";
import Calculator from "./Calculator";
class CalculatorContainer extends Component {
  static navigationOptions = {
    title: "Saving"
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <Calculator navigation={this.props.navigation} />;
  }
}

export default CalculatorContainer;
