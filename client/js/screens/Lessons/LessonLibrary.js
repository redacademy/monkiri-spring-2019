import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Libray"
  };
  render() {
    return (
      <View >
        <View>
        <View style={styles.editButton}>
            <TouchableOpacity style={styles.advancedButton}>
              <Text style={styles.buttonColor}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default LessonLibraryContainer
