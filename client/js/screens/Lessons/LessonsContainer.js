import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class LessonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }

  static navigationOptions = {
    title: "LESSONS"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ tabIndex: 0 });
            }}
          >
            <Text>Lessons</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ tabIndex: 1 });
            }}
          >
            <Text>Lfdgf</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>fdgf</Text>
        </View>
      </View>
    );
  }
}

export default LessonsContainer;
