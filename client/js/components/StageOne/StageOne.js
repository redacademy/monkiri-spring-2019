import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import theme from "../../config/styles";
import { styles } from "./styles";

class StageOneContainer extends Component {
  static navigationOptions = {
    title: "Stage 1"
  };
  render() {
    return (
      <ScrollView style={styles.title} contentContainerStyle={styles.content}>
        <Text style={styles.digitalCurrency}> Digital Currency </Text>
        <Progress.Bar
          style={styles.progressBar}
          progress={0.3}
          width={200}
          color={theme.colors.skyBlue}
        />

        <View style={styles.compoundInterest}>
          <Text>
            <Text style={styles.heading1}>Compound interest</Text> is what most
            loans deal with.
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
            When we are dealing with
            <Text style={styles.heading1}>Simple Interest</Text> we are only
            focusing on the original principal and the interest rate.{" "}
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
            With <Text style={styles.heading1}>Compound Interest</Text> we also
            look at the time and compounding periods
          </Text>
        </View>

        <View style={styles.cI}>
          <Text style={styles.simpleVsCompound}>
            Simple Interest vs Compound Interest
          </Text>

          <Text style={styles.textOne}>
            Both loans have the original principal of $100 and an interest rate
            of 20%. The left loan is
            <Text style={styles.heading1}> Simple Interest</Text> and the right
            is Compound Interest. Let’s see the difference after a couple of
            years
          </Text>

          <View style={styles.table}>
            <View style={styles.tableContent}>
              <Text style={styles.heading}>Simple Interest</Text>

              <View style={styles.formula}>
                <Text style={styles.interest}>
                  SI=P×r×n{"\n"}P=Principal Amount{"\n"}r=Annual Interest Rate
                  {"\n"}n=Term of Loan, in years ​
                </Text>
              </View>
            </View>

            <View style={styles.tableContent}>
              <Text style={styles.heading}>Compound Interest</Text>
              <Text style={styles.interest}>
                CI=P×(1+r) t −P {"\n"}P=Principal Amount{"\n"}r=Annual Interest
                Rate
                {"\n"}t=Number of years interest is applied
              </Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.burronShadow, styles.orangeButtonContainer]}
            >
              <Text style={styles.orangeButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default StageOneContainer;
