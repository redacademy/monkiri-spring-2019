import React, { Component } from "react";
import SurveyDifficulty from "./SurveyDifficulty";

class SurveyDifficultyContainer extends Component {
  render() {
    return <SurveyDifficulty navigation={this.props.navigation} />;
  }
}

export default SurveyDifficultyContainer;
