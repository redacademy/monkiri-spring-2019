import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
// import { SearchBar } from 'react-native-elements';
import SearchBarComponent from "./SearchBarComponent";

class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Libray"
  };
  render() {
    return (
      <View>
        <View>
          <View>
           <SearchBarComponent></SearchBarComponent>
            <Text>search </Text>
          </View>
          <View style={styles.libraryButtons}>
            <TouchableOpacity style={styles.lButtons}>
              <Text style={styles.libraryBtn}>Beginner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lButtons}>
              <Text style={styles.libraryBtn}>Advanced</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
            
        </View>
      </View>
    );
  }
}

export default LessonLibraryContainer;
