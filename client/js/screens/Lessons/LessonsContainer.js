import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

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
            flex: 1,
            height: 20
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ tabIndex: 0 });
            }}
          >
            <Text>My Lessons</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ tabIndex: 1 });
            }}
          >
            <Text>Library</Text>
          </TouchableOpacity>
        </View>
        <View>
          {this.state.tabIndex == 0 ? <Text>test 1</Text> : <Text>test2</Text>}
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={{ width: "70%", height: "70%" }}
            source={require(`../../assets/images/Icons - White/taxes.png`)}
          />
        </View>
      </View>
    );
  }
}

export default LessonsContainer;
