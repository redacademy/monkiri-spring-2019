import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
const TopicItem = ({ topic, selected, inLessons }) => {
  const backgroundColor = !inLessons ? topic.background : "#bbb";
  return (
    <View style={styles.container}>
      <View
        style={[
          { backgroundColor },
          styles.iconContainer,
          selected || inLessons ? styles.outlineContainer : null
        ]}
      >
        <Image style={styles.icon} source={topic.icon} />
        <View style={styles.triangleBackground} />
      </View>
      <Text style={styles.name}> {topic.name} </Text>
    </View>
  );
};

TopicItem.propTypes = {
  topic: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  inLessons: PropTypes.bool.isRequired
};
export default TopicItem;
