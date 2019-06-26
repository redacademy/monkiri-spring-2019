import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
class StagePopUp extends Component {
  state = {
    isModalVisible: true
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { stage, openPopUp, totalStages, completedStages } = this.props;
    const { isModalVisible } = this.state;
    return (
      <Modal isVisible={openPopUp === isModalVisible}>
        <View style={styles.root}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={stage && stage.icon ? stage.icon : null}
            />
            <View style={styles.triangleBackground} />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {stage && stage.lessonName ? stage.lessonName : null}
              </Text>
            </View>
            <Text style={styles.description}>
              {stage && stage.description
                ? stage.description
                : "There is no description for this lesson."}
            </Text>
          </View>
          <Text style={styles.blueTitle}>Stage Complete:</Text>
          <Text style={styles.process}>
            {completedStages}/{totalStages}
          </Text>
          <TouchableOpacity
            style={[styles.startButtonContainer, styles.burronShadow]}
            onPress={this.toggleModal}
          >
            <Text style={styles.startButtonText}>Start lesson</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={this.toggleModal}
          >
            <Ionicons size={25} style={styles.closeIcon} name="ios-close" />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
StagePopUp.propTypes = {
  stage: PropTypes.object.isRequired,
  openPopUp: PropTypes.bool.isRequired,
  totalStages: PropTypes.number.isRequired,
  completedStages: PropTypes.number.isRequired
};
export default StagePopUp;
