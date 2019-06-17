import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Libray"
  };
  render() {
    return (
      <View>
        <View>
          <View>
            <Text>search </Text>
          </View>
          <View style={styles.libraryButtons}>
            <TouchableOpacity style={styles.lButtons}>
              <Text style={styles.libraryBtn}>Beginner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lButtons}>
              <Text style={styles.libraryBtn}>advanced</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default LessonLibraryContainer;
