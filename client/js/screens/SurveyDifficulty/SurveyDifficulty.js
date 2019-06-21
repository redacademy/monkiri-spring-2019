import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const SurveyDifficulty = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>
          What's your level of
          {"\n"}
          financial knowledge?
        </Text>
      </View>

      <View style={styles.beginnerContainer}>
        <View style={styles.triangleShadowYellow} />

        <Image
          style={styles.treePic}
          source={require("../../assets/images/Illustrations/sprout.png")}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("SurveyLessons")}
          style={styles.advancedButton}
        >
          <Text style={styles.buttonColor}>Beginner</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.advancedContainer}>
        <View style={styles.triangleShadowBlue} />

        <Image
          style={styles.treePic}
          source={require("../../assets/images/Illustrations/Tree_oranges.png")}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("SurveyLessons")}
          style={styles.advancedButton}
        >
          <Text style={styles.buttonColor}>Advanced</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("LESSONS")}>
          <Text style={styles.skipText}>skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SurveyDifficulty.proptypes = {
  navigation: PropTypes.array.isRequired
};

export default SurveyDifficulty;
