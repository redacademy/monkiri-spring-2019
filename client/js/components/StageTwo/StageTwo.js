import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import * as Progress from "react-native-progress";
import styles from "./styles";
import theme from "../../config/styles";
export default class StageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null
    };
  }
  answerTrue() {
    this.setState({
      answer: true
    });
  }
  answerFalse() {
    this.setState({
      answer: false
    });
  }
  render() {
    const { width } = Dimensions.get("window");
    const { answer } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}> Quiz </Text>
        <Progress.Bar
          style={styles.processBar}
          progress={0.65}
          width={0.7 * width}
          color={theme.colors.skyBlue}
        />
        <Text style={styles.checkin}>CHECK IN!</Text>
        <Text style={styles.description}>
          A loan with compound interest will be larger than the same loan
          withsimple interest.
        </Text>
        <Image
          style={styles.icon}
          source={require("../../assets/images/mobileWallet/mobileWalletStage2.png")}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.selectButtonContainer,
              answer === true ? styles.clickedButtonContainer : null
            ]}
            onPress={() => this.answerTrue()}
          >
            <Text
              style={[
                styles.selectButtonText,
                answer === true ? styles.clickedButtonText : null
              ]}
            >
              TRUE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectButtonContainer,
              answer === false ? styles.clickedButtonContainer : null
            ]}
            onPress={() => this.answerFalse()}
          >
            <Text
              style={[
                styles.selectButtonText,
                answer === false ? styles.clickedButtonText : null
              ]}
            >
              FALSE
            </Text>
          </TouchableOpacity>
          {answer !== null ? (
            answer ? (
              <Text style={styles.result}>You are correct!</Text>
            ) : (
              <Text style={styles.result}>The correct answer is 'True'.</Text>
            )
          ) : null}
        </View>
        {answer === false ? (
          <Text style={styles.result}>
            nterest is defined as the cost of borrowing money. ... Simple
            interest is calculated on the principal amount of a loan only.
          </Text>
        ) : null}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.burronShadow, styles.orangeButtonContainer]}
          >
            <Text style={styles.orangeButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
