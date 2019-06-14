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
      <View style={styles.screenContainer}>
        <View style={styles.title}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ tabIndex: 0 });
            }}
          >
            <Text
              style={[
                this.state.tabIndex == 0 ? { backgroundColor: "#fff" } : null
              ]}
            >
              My Lessons
            </Text>
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
        <View style={styles.editButton}>
          <TouchableOpacity style={styles.advancedButton}>
            <Text style={styles.buttonColor}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={[{ backgroundColor: "#99c355" }, styles.iconContainer]}>
            <Image
              style={styles.whiteIcon}
              source={require(`../../assets/images/IconsWhite/saving.png`)}
            />
          </View>

          <View style={styles.cardContainer}>
            <Text style={styles.name}>Saving</Text>
            <View style={styles.bar} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Image
                style={styles.playButton}
                source={require(`../../assets/images/Buttons/play_button.png`)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={[{ backgroundColor: "#50A255" }, styles.iconContainer]}>
            <Image
              style={styles.whiteIcon}
              source={require(`../../assets/images/IconsWhite/budgeting.png`)}
            />
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.name}>Budgeting</Text>
            <View style={styles.bar} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Image
                style={styles.playButton}
                source={require(`../../assets/images/Buttons/play_button.png`)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity>
            <Image
              style={styles.addButton}
              source={require(`../../assets/images/Buttons/add.png`)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LessonsContainer;
