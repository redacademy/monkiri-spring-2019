import React, { Component } from "react";
import { View } from "react-native";
import RootStackNavigator from "./js/navigation/RootStackNavigator";
import SurveyDifficultyContainer from "./js/screens/Lessons/SurveyDifficulty/SurveydifficultyContainer";
export default class App extends Component {
  render() {
    // return <RootStackNavigator />;
    return <SurveyDifficultyContainer/>
  }
}
