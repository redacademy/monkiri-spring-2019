import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import LessonLibrary from "./LessonLibrary";
import theme from "../../config/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
class LessonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      isEditMode: false
    };
  }

  static navigationOptions = {
    title: "LESSONS"
  };
  toggleEditMode() {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  render() {
    const selectedTopics = [
      {
        name: "Saving",
        icon: require("../../assets/images/outlinedIcons/saving.png"),
        background: theme.colors.vitalGreen,
        description: undefined
      },
      {
        name: "Taxes",
        icon: require("../../assets/images/outlinedIcons/taxes.png"),
        background: theme.colors.cherryRed
      }
    ];
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
          <ScrollView>
            <View style={styles.editButtonContainer}>
              <TouchableOpacity
                onPress={() => this.toggleEditMode()}
                style={styles.editButton}
              >
                <Text style={styles.buttonColor}>
                  {this.state.isEditMode ? "Done" : "Edit"}
                </Text>
              </TouchableOpacity>
            </View>

            {selectedTopics.map(item => {
              return (
                <View key={item.name} style={styles.container}>
                  {this.state.isEditMode ? (
                    <TouchableOpacity style={styles.deleteButton}>
                      <Ionicons size={30} name="ios-close" color="#fff" />
                    </TouchableOpacity>
                  ) : null}

                  <View
                    style={[
                      { backgroundColor: item.background },
                      styles.iconContainer,
                      this.state.isEditMode ? styles.noBorderRadius : null
                    ]}
                  >
                    <Image style={styles.whiteIcon} source={item.icon} />
                  </View>

                  <View
                    style={[
                      styles.cardContainer,
                      this.state.isEditMode ? styles.editModeCardWidth : null
                    ]}
                  >
                    <Text style={styles.name}>{item.name}</Text>
                    {this.state.isEditMode ? null : <View style={styles.bar} />}
                  </View>
                  {this.state.isEditMode ? null : (
                    <View style={styles.button}>
                      <TouchableOpacity>
                        <Image
                          style={styles.playButton}
                          source={require(`../../assets/images/Buttons/play_button.png`)}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
          </ScrollView>
        )}
        {this.state.tabIndex === 0 ? (
          <TouchableOpacity
            style={styles.addButtonContainer}
            onPress={() => {
              this.setState({ tabIndex: 1 });
            }}
          >
            <View style={styles.addButton}>
              <Image
                style={styles.addButton}
                source={require(`../../assets/images/Buttons/add.png`)}
              />
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

export default LessonsContainer;
