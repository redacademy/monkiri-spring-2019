import React, { Component } from "react";
import SurveyLessons from "./SurveyLessons";
import topics from "../../helpers/topics";

class SurveyLessonsContainer extends Component {
  render() {
    return <SurveyLessons data={topics} navigation={this.props.navigation} />;
  }
}

export default SurveyLessonsContainer;
