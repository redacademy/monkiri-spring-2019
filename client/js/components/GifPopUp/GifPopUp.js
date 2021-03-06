import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
class GifPopUp extends Component {
  state = {
    isModalVisible: true
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { openPopUp, handlePopUp } = this.props;
    const { isModalVisible } = this.state;

    const gifSource = require("../../assets/images/plantGifs/Seed_animation.gif");

    return (
      <Modal isVisible={openPopUp === isModalVisible}>
        <View style={styles.root}>
          <Image style={styles.gif} source={gifSource} />
          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={() => {
              handlePopUp();
              this.toggleModal;
            }}
          >
            <Ionicons size={25} style={styles.closeIcon} name="ios-close" />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
GifPopUp.propTypes = {
  openPopUp: PropTypes.bool.isRequired,
  handlePopUp: PropTypes.func.isRequired
};
export default GifPopUp;
