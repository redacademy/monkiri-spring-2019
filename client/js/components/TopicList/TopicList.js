import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import TopicItem from "../TopicItem";
import styles from "./styles";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import LessonPopUp from "../LessonPopUp";
import LessonsContext from "../../context";

class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopics: {},
      openPopUp: false,
      currentTopic: {}
    };
  }
  toggle = topic => {
    const currentSelected = this.state.selectedTopics;
    currentSelected[topic.name] = currentSelected[topic.name]
      ? !currentSelected[topic.name]
      : true;
    this.setState({ selectedTopics: { ...currentSelected } });
  };
  toggleModal = topic => {
    this.setState({
      currentTopic: topic,
      openPopUp: !this.state.openPopUp
    });
  };
  render() {
    const { topics, hasButton, navigation, isLibrary } = this.props;
    const { selectedTopics, openPopUp, currentTopic } = this.state;
    return (
      <LessonsContext.Consumer>
        {value => (
          <View>
            <View style={styles.container}>
              {topics.map((topic, index) => (
                <TouchableOpacity
                  key={topic.name + index}
                  style={styles.eachItem}
                  onPress={() =>
                    !!isLibrary ? this.toggleModal(topic) : this.toggle(topic)
                  }
                >
                  <TopicItem
                    topic={topic}
                    selected={selectedTopics[topic.name]}
                  />
                </TouchableOpacity>
              ))}
            </View>
            {hasButton ? (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    value.setLessons(selectedTopics);
                    navigation.navigate("LESSON");
                  }}
                >
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
              </View>
            ) : null}
            <LessonPopUp topic={currentTopic} openPopUp={openPopUp} />
          </View>
        )}
      </LessonsContext.Consumer>
    );
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired,
  hasButton: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  isLibrary: PropTypes.bool.isRequired
};
export default withNavigation(TopicList);
