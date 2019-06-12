import React,{Component} from "react";
import { View } from "react-native";
import TopicItem from "../TopicItem";
import styles from "./styles";
import PropTypes from "prop-types";

class TopicList extends Component {
  render() {
    const { topics } = this.props;
    return (
      <View style={styles.container}>
        {topics.map((topic, index) => (
          <TopicItem
            key={topic.name + index}
            style={styles.eachItem}
            topic={topic}
            selected={true}
          />
        ))}
      </View>
    );
  }
}

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};
export default TopicList;
