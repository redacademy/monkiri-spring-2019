import React, { Component } from "react";
import { ScrollView,View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
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
      <ScrollView style={styles.root} contentContainerStyle={styles.content}>
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
            style={styles.selectButtonContainer}
            //   onPress={}
          >
            <Text style={styles.selectButtonText}>TRUE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectButtonContainer}
            //   onPress={}
          >
            <Text style={styles.selectButtonText}>FALSE</Text>
          </TouchableOpacity>
          {/* <Text style={styles.result}>You are correct!</Text> */}
          <Text style={styles.result}>The correct answer is 'True'.</Text>
        </View>
        <Text style={styles.result}>
            Mobile wallets allow you to purchase goods and services both online
            and in stores that support mobile payments!
          </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.burronShadow, styles.orangeButtonContainer]}
            //   onPress={}
          >
            <Text style={styles.orangeButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
