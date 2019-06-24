import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import styles from "./styles";
import theme from "../../config/styles";

const StageComplete = () => {
  const { width } = Dimensions.get("window");

  const totalStageNum = 4;
  const stage = {
    id: 2,
    type: "complete",
    lessonName: "Lesson",
    icon: require("../../assets/images/outlinedIcons/taxes.png"),
    isCompleted: false,
    avaiable: false,
    plusPoints: 1500,
    topicsLearned: ["Virtual Currency", "Security", "Safe Transfers"]
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}> {stage.lessonName} </Text>
      <View style={styles.processBarContainer}>
        <Progress.Bar
          style={styles.processBar}
          progress={1}
          width={0.7 * width}
          color={theme.colors.skyBlue}
        />
        <Text style={styles.processText}>
          {totalStageNum}/{totalStageNum}
        </Text>
      </View>
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
          style={[styles.burronShadow, styles.orangeButtonContainer]}
        >
          <Text style={styles.orangeButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default StageComplete;
