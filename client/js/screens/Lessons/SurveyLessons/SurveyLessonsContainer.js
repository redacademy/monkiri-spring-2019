import React from "react";
import { View } from "react-native";
import SurveyLessons from "./SurveyLessons";
import topics from "../../../helpers/topics";
const SurveyLessonsContainer = () => {
  return (
    <View>
      <SurveyLessons data={topics} />
    </View>
  );
};

export default SurveyLessonsContainer;
