import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import TopicList from "../../components/TopicList";
import styles from "./styles";
import PropTypes from "prop-types";

const SurveyLessons = ({ data, navigation }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What topics are you interested in learning?
        </Text>
      </View>
      <View style={styles.topicListContainer}>
        <TopicList topics={data} hasButton={true} isLibrary={false} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("LESSON")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

SurveyLessons.proptypes = {
  navigation: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default SurveyLessons;
