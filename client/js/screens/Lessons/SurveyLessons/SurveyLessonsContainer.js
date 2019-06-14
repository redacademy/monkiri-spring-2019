import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SurveyLessons from "./SurveyLessons";
import topics from "./helper/data";
const SurveyLessonsContainer = () => {
  return (
    <View>
      <Text>What topics are you interested in learning?</Text>
      <SurveyLessons data={topics} />
      <TouchableOpacity>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SurveyLessonsContainer;
