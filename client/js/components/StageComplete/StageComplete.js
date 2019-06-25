import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import styles from "./styles";
import theme from "../../config/styles";

const StageComplete = ({ navigation }) => {
  const { width } = Dimensions.get("window");

  const totalStageNum = 4;
  const stage = {
    id: 2,
    type: "complete",
    lessonName: "Lesson",
    icon: require("../../assets/images/outlinedIcons/taxes.png"),
    isCompleted: false,
    avaiable: false,
    plusPoints: 60,
    topicsLearned: ["Introduction", "Quiz", "Calculator"]
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}> {stage.lessonName} </Text>

      <Text style={styles.lessonCompleteTitle}>LESSON COMPLETE!</Text>
      <View style={styles.iconContainer}>
        <View style={styles.outline}>
          <Image
            style={styles.circle}
            source={require("../../assets/images/Illustrations/circle.png")}
          />
          <Image style={styles.icon} source={stage.icon} />
        </View>
        <Text style={styles.subheader}>+ {stage.plusPoints} PTS</Text>
      </View>
      <View style={[styles.burronShadow, styles.summaryContainer]}>
        <View style={styles.congratulationTitleContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require("../../assets/images/Illustrations/Completion_badge.png")}
          />
          <Text style={styles.congratulation}>Congratulations!</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>You've learned about:</Text>
          {stage.topicsLearned.map(item => {
            return (
              <View style={styles.eachItem} key={item}>
                <Image
                  style={styles.yellowLeaf}
                  source={require("../../assets/images/Illustrations/Yellow_leaf.png")}
                />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.state.params.handleComplete(3);
            navigation.navigate("PROGRESS");
          }}
          style={[styles.burronShadow, styles.orangeButtonContainer]}
        >
          <Text style={styles.orangeButtonText}>Complete Lesson</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default StageComplete;
