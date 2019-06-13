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
        <View style={styles.title}>
          <Text style={{ height: 60 }}>
            What's your level of
            {"\n"}
            financial knowledge?
          </Text>
        </View>
        <View style={{ flex: 0.8, width: "70%" }}>
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
