import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
const TopicItem = ({ topic, selected }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          { backgroundColor: topic.background },
          styles.iconContainer,
          selected ? styles.outlineContainer : null
        ]}
      >
        <Image
          style={{ width: "70%", height: "70%", resizeMode: "contain" }}
          source={topic.icon}
        />
        <View style={styles.triangleBackground} />
      </View>
      <Text style={styles.name}> {topic.name} </Text>
    </View>
  );
};

TopicItem.propTypes = {
  topic: PropTypes.object.isRequired
};
export default TopicItem;
