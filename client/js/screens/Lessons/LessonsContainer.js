import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import LessonLibrary from "./LessonLibrary";

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
        <View style={styles.tabIndex}>
          <View style={styles.tabLayout}>
            <TouchableOpacity
              style={[
                this.state.tabIndex !== 0
                  ? styles.buttonNotClicked
                  : styles.buttonClicked
              ]}
              onPress={() => {
                this.setState({ tabIndex: 0 });
              }}
            >
              <Text
                style={[
                  this.state.tabIndex !== 0
                    ? styles.buttonTextNotClicked
                    : styles.buttonTextClicked
                ]}
              >
                My Lessons
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabBorder}>
            <TouchableOpacity
              style={[
                this.state.tabIndex !== 1
                  ? styles.buttonNotClicked
                  : styles.buttonClicked
              ]}
              onPress={() => {
                this.setState({ tabIndex: 1 });
              }}
            >
              <Text
                style={[
                  this.state.tabIndex !== 1
                    ? styles.buttonTextNotClicked
                    : styles.buttonTextClicked
                ]}
              >
                Library
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.tabIndex !== 0 ? (
          <LessonLibrary />
        ) : (
          <View>
            <View style={styles.editButton}>
              <TouchableOpacity style={styles.advancedButton}>
                <Text style={styles.buttonColor}>Edit</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("PROGRESS")}
            >
              <View style={styles.container}>
                <View style={[styles.backgroundGreen, styles.iconContainer]}>
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
            </TouchableOpacity>
            <View style={styles.container}>
              <View style={[styles.backgroundDarkGreen, styles.iconContainer]}>
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
          </View>
        )}
        {this.state.tabIndex === 0 ? (
          <View style={styles.addButtonContainer}>
            <TouchableOpacity>
              <Image
                style={styles.addButton}
                source={require(`../../assets/images/Buttons/add.png`)}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

export default LessonsContainer;
