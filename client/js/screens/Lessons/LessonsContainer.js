import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import LessonLibrary from "./LessonLibrary";
import theme from "../../config/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import LessonsContext from "../../context";

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
    const topics = [
      {
        name: "Saving",
        icon: require("../../assets/images/outlinedIcons/saving.png"),
        background: theme.colors.vitalGreen,
        description: undefined,
        stages: [
          {
            id: 1,
            type: "content",
            lessonName: "Introduction",
            icon: require("../../assets/images/outlinedIcons/business.png"),
            avaiable: true,
            isCompleted: false,
            text: "Start the Quiz to water and grow your sprout!"
          },
          {
            id: 2,
            type: "quiz",
            lessonName: "Quiz",
            icon: require("../../assets/images/outlinedIcons/taxes.png"),
            isCompleted: false,
            avaiable: false,
            text: "Start the Calculator to water and grow your sprout!",
            answer: true,
            explanation:
              "Interest is defined as the cost of borrowing money. ... Simple interest is calculated on the principal amount of a loan only."
          },
          {
            id: 3,
            type: "application",
            lessonName: "Calculator",
            icon: require("../../assets/images/outlinedIcons/insurance.png"),
            isCompleted: false,
            avaiable: false,
            text:
              "You've completed all the compound interest ! Your tree is full grown."
          }
        ]
      },
      {
        name: "Budgeting",
        icon: require("../../assets/images/outlinedIcons/budgeting.png"),
        background: theme.colors.springGreen
      },
      {
        name: "Investment",
        icon: require("../../assets/images/outlinedIcons/investment.png"),
        background: theme.colors.seaBlue
      },
      {
        name: "Mobile Wallet",
        icon: require("../../assets/images/outlinedIcons/mobilewallet.png"),
        background: theme.colors.sunYellow
      },
      {
        name: "Taxes",
        icon: require("../../assets/images/outlinedIcons/taxes.png"),
        background: theme.colors.cherryRed
      },
      {
        name: "Debt",
        icon: require("../../assets/images/outlinedIcons/debt.png"),
        background: theme.colors.salmonPink
      },
      {
        name: "Insurance",
        icon: require("../../assets/images/outlinedIcons/insurance.png"),
        background: theme.colors.activeOrange
      },
      {
        name: "Business",
        icon: require("../../assets/images/outlinedIcons/business.png"),
        background: theme.colors.unitedNationBlue
      },
      {
        name: "International Money",
        icon: require("../../assets/images/outlinedIcons/internationmoney.png"),
        background: theme.colors.lavender
      }
    ];

    return (
      <LessonsContext.Consumer>
        {value => {
          const { selectedTopics } = value;
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

                  {topics.map(item => {
                    if (selectedTopics[item.name])
                      return (
                        <View key={item.name} style={styles.container}>
                          {this.state.isEditMode ? (
                            <TouchableOpacity
                              onPress={() => {
                                value.removeLesson(item.name);
                              }}
                              style={styles.deleteButton}
                            >
                              <Ionicons
                                size={30}
                                name="ios-close"
                                color="#fff"
                              />
                            </TouchableOpacity>
                          ) : null}

                          <View
                            style={[
                              { backgroundColor: item.background },
                              styles.iconContainer,
                              this.state.isEditMode
                                ? styles.noBorderRadius
                                : null
                            ]}
                          >
                            <Image
                              style={styles.whiteIcon}
                              source={item.icon}
                            />
                          </View>

                          <View
                            style={[
                              styles.cardContainer,
                              this.state.isEditMode
                                ? styles.editModeCardWidth
                                : null
                            ]}
                          >
                            <Text style={styles.name}>{item.name}</Text>
                            {this.state.isEditMode ? null : (
                              <View style={styles.bar} />
                            )}
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
        }}
      </LessonsContext.Consumer>
    );
  }
}

export default LessonsContainer;
