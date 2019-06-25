import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { SearchBar } from "react-native-elements";
import TopicList from "../../components/TopicList";
import topics from "../../helpers/topics";

class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Library"
  };
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tabIndex: 0
    };
  }
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    const result = topics.filter(topic =>
      topic.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <View style={styles.libraryContainer}>
        <View style={styles.dashboard}>
          <View style={styles.searchBar}>
            <SearchBar
              placeholder=""
              onChangeText={this.updateSearch}
              value={search}
              lightTheme={true}
              containerStyle={styles.searchBarContainerStyle}
              inputContainerStyle={{ backgroundColor: "white" }}
              searchIcon={{ color: "#25BDD8" }}
            />
          </View>
          <View style={styles.libraryButtons}>
            <TouchableOpacity
              style={[
                this.state.tabIndex === 0
                  ? styles.selectButtonClicked
                  : styles.selectButtonNotClicked
              ]}
              onPress={() => {
                this.setState({ tabIndex: 0 });
              }}
            >
              <Text
                style={[
                  this.state.tabIndex === 0
                    ? styles.selectButtonTextClicked
                    : styles.selectButtonTextNotClicked
                ]}
              >
                Beginner
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                this.state.tabIndex === 1
                  ? styles.selectButtonClicked
                  : styles.selectButtonNotClicked
              ]}
              onPress={() => {
                this.setState({ tabIndex: 1 });
              }}
            >
              <Text
                style={[
                  this.state.tabIndex === 1
                    ? styles.selectButtonTextClicked
                    : styles.selectButtonTextNotClicked
                ]}
              >
                Advanced
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scrollView}>
          <TopicList topics={result} hasButton={false} isLibrary={true} />
        </ScrollView>
      </View>
    );
  }
}

export default LessonLibraryContainer;
