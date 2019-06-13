import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import TopicItem from "../TopicItem";
import styles from "./styles";
import PropTypes from "prop-types";

class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopics: { Saving: true }
    };
  }
  toggle(topic) {
    const currentSelected = this.state.selectedTopics;
    currentSelected[topic.name] = currentSelected[topic.name]
      ? !currentSelected[topic.name]
      : true;
    this.setState({ selectedTopics: { ...currentSelected } });
  }
  render() {
    const { topics } = this.props;
    const { selectedTopics } = this.state;
    return (
      <View style={styles.container}>
        {topics.map((topic, index) => (
          <TouchableOpacity
            key={topic.name + index}
            style={styles.eachItem}
            onPress={() => this.toggle(topic)}
          >
            <TopicItem topic={topic} selected={selectedTopics[topic.name]} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};
export default TopicList;
