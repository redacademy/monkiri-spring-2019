import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import TopicList from "../../../components/TopicList";
import styles from "./styles";

const SurveyLessons = ({ data }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What topics are you interested in learning?
        </Text>
      </View>
      <View style={styles.topicListContainer}>
        <TopicList topics={data} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SurveyLessons;
