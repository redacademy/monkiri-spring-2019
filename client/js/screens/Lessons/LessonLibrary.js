import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { SearchBar } from "react-native-elements";
import TopicList from "../../components/TopicList";
import topics from "../../helpers/topics";
import SurveyLessons from "./SurveyLessons";
class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Libray"
  };
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    console.log(search);
    const result = topics.filter(topic =>
      topic.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log(result);
    return (
      <View style={styles.libraryContainer}>
        <View>
          <View style={styles.searchBar}>
            <SearchBar
              placeholder=""
              onChangeText={this.updateSearch}
              value={search}
              lightTheme={true}
              containerStyle={{
                backgroundColor: "white",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowColor: "grey",
                shadowRadius: 2,
                shadowOffset: { height: 3, width: 0 },
                shadowRadius: 3
              }}
              inputContainerStyle={{ backgroundColor: "white" }}
              searchIcon={{ color: "#25BDD8" }}
            />
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

        <ScrollView style={{width:"100%"}}>
          <TopicList
            style={styles.topicList}
            topics={result}
            hasButton={false}
            isLibrary={true}
          />
        </ScrollView>
      </View>
    );
  }
}

export default LessonLibraryContainer;
