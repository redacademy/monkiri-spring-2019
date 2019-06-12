import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class SurveyDifficultyContainer extends Component {
  static navigationOptions = {
    title: "LESSONS"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            paddingBottom: 40,
            textAlign: "center",
            fontSize: 18
          }}
        >
          What's your level
          {"\n"}
          of financial knowledge?
        </Text>

        <View
          style={{
            backgroundColor: "#F2C249",
            width: 270,
            height: 220,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginBottom: 20,
            fontFamily: "Quicksand"
          }}
        >
          <View
            style={{
              right: 0,
              bottom: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderLeftWidth: 170,
              borderBottomWidth: 210,
              borderBottomColor: "transparent",
              borderLeftColor: "#edcc74",
              transform: [{ rotate: "180deg" }],
              position: "absolute"
            }}
          />
          <Image
            style={{
              width: 100,
              height: 150
            }}
            source={require("../../../assets/images/illustrations/PNG/Tree_oranges.png")}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#25BDD8",
              height: 35,
              width: 130,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 80
            }}
          >
            <Text
              style={{
                color: "white"
              }}
            >
              Beginner
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#59c9c9",
            width: 270,
            height: 220,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10
          }}
        >
          <View
            style={{
              right: 0,
              bottom: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderLeftWidth: 170,
              borderBottomWidth: 210,
              borderBottomColor: "transparent",
              borderLeftColor: "#98CBD3",
              transform: [{ rotate: "180deg" }],
              position: "absolute"
            }}
          />
          <Image
            style={{
              width: 100,
              height: 150
            }}
            source={require("../../../assets/images/illustrations/PNG/Tree_oranges.png")}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#25BDD8",
              height: 35,
              width: 130,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 80
            }}
          >
            <Text
              style={{
                color: "white"
              }}
            >
              Advanced
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                textDecorationLine: "underline",
                paddingTop: 40
              }}
            >
              skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SurveyDifficultyContainer;
