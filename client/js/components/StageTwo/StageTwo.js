import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import styles from "./styles";
import theme from "../../config/styles";
export default class StageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={styles.root}>
        <Text style={styles.title}> Digital Currency </Text>
        <Progress.Bar
          style={styles.processBar}
          progress={0.65}
          width={0.7 * width}
          color={theme.colors.skyBlue}
        />
        <Text style={styles.checkin}>CHECK IN!</Text>
        <Text style={styles.description}>
          True or False. Mobile wallets let you purchase goods online and in
          real life.
        </Text>
        <Image
          style={styles.icon}
          source={require("../../assets/images/mobileWallet/mobileWalletStage2.png")}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.trueButtonContainer}
            //   onPress={}
          >
            <Text style={styles.trueButtonText}>TRUE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.falseButtonContainer}
            //   onPress={}
          >
            <Text style={styles.falseButtonText}>FALSE</Text>
          </TouchableOpacity>
          <Text>You are correct!</Text>
        </View>

        <TouchableOpacity
          style={[styles.continueButtonContainer, styles.burronShadow]}
          //   onPress={}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
