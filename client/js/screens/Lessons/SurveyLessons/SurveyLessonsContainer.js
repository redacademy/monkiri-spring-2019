import React from "react";
import { View } from "react-native";
import SurveyLessons from "./SurveyLessons";
import topics from "./helper/data";
const SurveyLessonsContainer = () => {
  return (
    <View>
      <SurveyLessons data={topics} />
    </View>
  );
};

export default SurveyLessonsContainer;
