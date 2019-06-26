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
  static navigationOptions = {
    title: "Saving"
  };
  constructor(props) {
    super(props);
    this.state = {
      answer: null
    };
  }
  toggleAnswer = () => {
    this.setState({ answer: !this.state.answer });
  };
  render() {
    const { width } = Dimensions.get("window");
    const { answer } = this.state;
    const stage = {
      id: 2,
      type: "quiz",
      lessonName: "Quiz",
      icon: require("../../assets/images/outlinedIcons/taxes.png"),
      isCompleted: false,
      avaiable: false,
      text:
        "A loan with compound interest will be larger than the same loan withsimple interest.",
      answer: true,
      explanation:
        "Interest is defined as the cost of borrowing money. ... Simple interest is calculated on the principal amount of a loan only."
    };
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
        <Text style={styles.description}>{stage.text}</Text>
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
            onPress={() => this.toggleAnswer()}
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
            onPress={() => this.toggleAnswer()}
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
            answer === stage.answer ? (
              <Text style={styles.result}>You are correct!</Text>
            ) : (
              <Text style={styles.result}>
                The correct answer is '{stage.answer ? "True" : "False"}'.
              </Text>
            )
          ) : null}
        </View>
        {answer === !stage.answer ? (
          <Text style={styles.result}>{stage.explanation}</Text>
        ) : null}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.state.params.handleComplete(2);
              this.props.navigation.navigate("PROGRESS");
            }}
            style={[styles.burronShadow, styles.orangeButtonContainer]}
          >
            <Text style={styles.orangeButtonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
