import React, { Component } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";
import SearchBarComponent from "./SearchBarComponent";
// import { SearchBar } from 'react-native-elements';


class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Libray"
  };
  render() {
    return (
      <View>
        <View>
          <View style={styles.searchBar}>
            <SearchBarComponent  />
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
        <View />

      </View>
    );
  }
}

export default LessonLibraryContainer;
