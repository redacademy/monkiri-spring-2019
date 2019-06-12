import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

class SurveyDifficultyContainer extends Component {
  static navigationOptions = {
    title: "LESSONS"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          What's your level
          {"\n"}
          of financial knowledge?
        </Text>

        <View style={styles.beginnerContainer}>
          <View style={styles.triangleShadowYellow} />

          <Image
            style={styles.treePic}
            source={require("../../../assets/images/illustrations/PNG/sprout.png")}
          />
          <TouchableOpacity style={styles.beginnerButton}>
            <Text style={styles.buttonColor}>Beginner</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.advancedContainer}>
          <View style={styles.triangleShadowBlue} />

          <Image
            style={styles.treePic}
            source={require("../../../assets/images/illustrations/PNG/Tree_oranges.png")}
          />
          <TouchableOpacity style={styles.advancedButton}>
            <Text style={styles.buttonColor}>Advanced</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.skipText}>skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SurveyDifficultyContainer;
