import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import SearchBarComponent from "./SearchBarComponent";
// import { SearchBar } from 'react-native-elements';
import TopicList from "../../components/TopicList";
import topics from "../../helpers/topics";
import SurveyLessons from "./SurveyLessons";
class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Libray"
  };
  render() {
    return (
      <View style={styles.libraryContainer}>
        <View>
          <View style={styles.searchBar}>
            <SearchBarComponent />
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

        <TopicList
          style={styles.topicList}
          topics={topics}
          hasButton={false}
          isLibrary={true}
        />
      </View>
    );
  }
}

export default LessonLibraryContainer;
