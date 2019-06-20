import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

import { styles } from "./styles";

class StageOneContainer extends Component {
  static navigationOptions = {
    title: "Stage 1"
  };
  render() {
    //const {content} =this.props;

    return (
      <View style={styles.title}>
        <Text> Digital Currency </Text>
        <Progress.Bar progress={0.3} width={200} />

        <View style={styles.compoundInterest}>
          <Text>
            <Text style={styles.heading1}>Compound interest</Text> is what most
            loans deal with.{" "}
          </Text>
        </View>

        <View style={styles.compoundInterest}>
          <Image
            style={{
              width: 40,
              height: 40,
              justifyContent: "center"
            }}
            source={require("../../assets/images/illustrations/Circle.png")}
          />
          <Text>
            {" "}
            When we are dealing with{" "}
            <Text style={styles.heading1}>Simple Interest</Text> we are only
            focusing on the original principal and the interest rate.{" "}
          </Text>
          <Image
            style={{
              width: 40,
              height: 40
            }}
            source={require("../../assets/images/illustrations/Circle.png")}
          />
          <Text>
            {" "}
            With <Text style={styles.heading1}>Compound Interest</Text> we also
            look at the time and compounding periods{" "}
          </Text>
        </View>

        <View style={styles.compoundInterest}>
          <Text style={styles.simpleVsCompound}>
            Simple Interest vs Compound Interest
          </Text>
          <View style={styles.one}>
          <Text>1</Text>
            <Image
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                flex: 1
              }}
              source={require("../../assets/images/illustrations/Circle.png")}
            />
          </View>
          <Text>
            {" "}
            Both loans have the original principal of $100 and an interest rate
            of 20%. The left loan is{" "}
            <Text style={styles.heading1}>Simple Interest</Text> and the right
            is Compound Interest. Let’s see the difference after a couple of
            years{" "}
          </Text>

          <View style={styles.table}>
            <View style={{ width: "50%" }}>
              <Text style={styles.heading}>Simple Interest</Text>

              <View style={styles.formula}>
                <Text style={styles.interest}>
                  SI=P×r×n{"\n"}P=Principal Amount{"\n"}r=Annual Interest Rate
                  {"\n"}n=Term of Loan, in years ​
                </Text>
              </View>
            </View>

            <View style={{ width: "50%" }}>
              <Text style={styles.heading}>Compound Interest</Text>
              <Text style={styles.interest}>
                CI=P×(1+r) t −P {"\n"}P=Principal Amount{"\n"}r=Annual Interest
                Rate
                {"\n"}t=Number of years interest is applied
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default StageOneContainer;
