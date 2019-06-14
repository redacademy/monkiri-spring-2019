import React from "react";
import { View } from "react-native";
import TopicList from "../../../components/";
const SurveyLessons = ({ data }) => {
  return (
    <View>
      <TopicList topics={data} />
    </View>
  );
};

export default SurveyLessons;
