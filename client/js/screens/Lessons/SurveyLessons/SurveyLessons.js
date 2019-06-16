import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import TopicList from "../../../components/TopicList";
import styles from "./styles";
import { withNavigation } from "react-navigation";
const SurveyLessons = ({ data, navigation }) => {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What topics are you interested in learning?
        </Text>
      </View>
      <View style={styles.topicListContainer}>
        <TopicList topics={data} hasButton={true} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate("LESSON")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default withNavigation(SurveyLessons);
