import React, { Component } from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";

import { styles } from "./styles";

class StageOneContainer extends Component {
  static navigationOptions = {
    title: "Stage 1"
  };
  render() {
    return (
      <View style={styles.title}>
        <Text> Digital Currency </Text>
        <Progress.Bar progress={0.3} width={200} />

        <View>
          <Text style={styles.heading1}>Compound Interest</Text>
          <Text>Compound interest is what most loans deal with. </Text>
        </View>

        <View>
          <Text style={styles.heading1}>Compound InterestVS Simple Interest</Text>
          <Text>
            When we are dealing with simple interest, we are only focusing on
            the original principal and the interest rate.
          </Text>
          <Text>
            With Compound interest, we also look at thetime and compounding
            periods
          </Text>
        </View>

        <View>
          <Text style={styles.heading1}>Time</Text>
          <Text>
            Comparison between a Simple Interest loan and a Compound Interest
            loan.
          </Text>
          <Text>
            Both loans have the original principal of $100 and an interest rate
            of 20%. The left loan is Simple Interest and the right is Compound
            Interest. Let’s see the differenceafter a couple of years
          </Text>
        </View>
      </View>
    );
  }
}

export default StageOneContainer;
