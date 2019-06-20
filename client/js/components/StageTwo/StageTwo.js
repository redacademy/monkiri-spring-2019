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
      clickedT: false,
      clickedF: false
    };
  }
  toggleT(clickedT) {
    if (clickedT) {
      this.setState({
        clickedT: !clickedT
      });
    } else {
      this.setState({
        clickedT: !clickedT,
        clickedF: clickedT
      });
    }
  }
  toggleF(clickedF) {
    if (clickedF) {
      this.setState({
        clickedF: !clickedF
      });
    } else {
      this.setState({
        clickedT: clickedF,
        clickedF: !clickedF
      });
    }
  }
  render() {
    const { width } = Dimensions.get("window");
    const { clickedT, clickedF } = this.state;
    return (
      <ScrollView style={styles.root} contentContainerStyle={styles.content}>
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
              clickedT ? styles.clickedButtonContainer : null
            ]}
            onPress={() => this.toggleT(clickedT)}
          >
            <Text
              style={[
                styles.selectButtonText,
                clickedT ? styles.clickedButtonText : null
              ]}
            >
              TRUE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectButtonContainer,
              clickedF ? styles.clickedButtonContainer : null
            ]}
            onPress={() => this.toggleF(clickedF)}
          >
            <Text
              style={[
                styles.selectButtonText,
                clickedF ? styles.clickedButtonText : null
              ]}
            >
              FALSE
            </Text>
          </TouchableOpacity>
          {clickedT || clickedF ? (
            clickedT ? (
              <Text style={styles.result}>You are correct!</Text>
            ) : (
              <Text style={styles.result}>The correct answer is 'True'.</Text>
            )
          ) : null}
        </View>
        {clickedF ? (
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
