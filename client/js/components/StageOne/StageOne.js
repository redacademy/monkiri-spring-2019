import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import theme from "../../config/styles";
import { styles } from "./styles";

class StageOneContainer extends Component {
  static navigationOptions = {
    title: "Saving"
  };
  render() {
    const stage = {
      id: 1,
      type: "2-paragraoh-content",
      lessonName: "Introduction",
      icon: require("../../assets/images/outlinedIcons/business.png"),
      avaiable: true,
      isCompleted: false,
      text: "Start the Quiz to water and grow your sprout!",
      description1: "Compound interest",
      description2: " is what most loans deal with.",
      paragraphOne1: "When we are dealing with ",
      paragraphOne2: "Simple Interest",
      paragraphOne3:
        " we are only focusing on the original principal and the interest rate.",
      paragraphTwo1: "With ",
      paragraphTwo2: "Compound Interest",
      paragraphTwo3: " we also look at the time and compounding periods.",
      formTitle: "Simple Interest vs Compound Interest",
      formDescription1:
        "Both loans have the original principal of $100 and an interest rate of 20%. The left loan is ",
      formDescription2: "Simple Interest",
      formDescription3:
        " and the right is Compound Interest. Let’s see the difference after a couple of years",
      columnOneTitle: "Simple Interest",
      columnOneContent: `SI=P×r×n
P=Principal Amount
r=Annual Interest Rate
n=Term of Loan, in years `,
      columnTwoTitle: "Compound Interest",
      columnTwoContent: `CI=P×(1+r) t −P
P=Principal Amount
r=Annual Interest Rate
t=Number of years interest is applied`
    };
    return (
      <ScrollView style={styles.title} contentContainerStyle={styles.content}>
        <Text style={styles.digitalCurrency}>{stage.lessonName}</Text>
        <Progress.Bar
          style={styles.progressBar}
          progress={0.3}
          width={200}
          color={theme.colors.skyBlue}
        />

        <View style={styles.compoundInterest}>
          <Text>
            <Text style={styles.heading1}>{stage.description1}</Text>
            {stage.description2}
          </Text>
        </View>

        <View style={styles.compoundInterest1}>
          <View style={styles.circleOne}>
            <Image
              style={styles.circleImg}
              source={require(`../../assets/images/Illustrations/circle.png`)}
            />

            <View style={styles.numberOne}>
              <Text style={styles.one}>1</Text>
            </View>
          </View>
          <Text style={styles.textOne}>
            {stage.paragraphOne1}
            <Text style={styles.heading1}>{stage.paragraphOne2}</Text>
            {stage.paragraphOne3}
          </Text>

          <View style={styles.circleTwo}>
            <Image
              style={styles.circleImg}
              source={require(`../../assets/images/Illustrations/circle.png`)}
            />

            <View style={styles.numberOne}>
              <Text style={styles.one}>2</Text>
            </View>
          </View>
          <Text style={styles.textTwo}>
            {stage.paragraphTwo1}
            <Text style={styles.heading1}>{stage.paragraphTwo2}</Text>
            {stage.paragraphTwo3}
          </Text>
        </View>

        <View style={styles.cI}>
          <Text style={styles.simpleVsCompound}>{stage.formTitle}</Text>

          <Text style={styles.textOne}>
            {stage.formDescription1}
            <Text style={styles.heading1}>{stage.formDescription2}</Text>
            {stage.formDescription3}
          </Text>

          <View style={styles.table}>
            <View style={styles.tableContent}>
              <Text style={styles.heading}>{stage.columnOneTitle}</Text>

              <View style={styles.formula}>
                <Text style={styles.interest}>{stage.columnOneContent}</Text>
              </View>
            </View>

            <View style={styles.tableContent}>
              <Text style={styles.heading}>{stage.columnTwoTitle}</Text>
              <Text style={styles.interest}>{stage.columnTwoContent}</Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.burronShadow, styles.orangeButtonContainer]}
              onPress={() => {
                this.props.navigation.state.params.handleComplete(1);
                this.props.navigation.state.params.handlePopUp();
                this.props.navigation.navigate("PROGRESS");
              }}
            >
              <Text style={styles.orangeButtonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default StageOneContainer;
