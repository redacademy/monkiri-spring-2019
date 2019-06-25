import React, { useState } from "react";
import ImageLoader from "../../components/ImageLoader";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import * as Progress from "react-native-progress";
const initialData = [
  {
    id: 1,
    lessonName: "Introduction",
    icon: require("../../assets/images/outlinedIcons/business.png"),
    avaiable: true,
    isCompleted: false,
    text: "Keep going ! Start the Quiz to water and grow your sprout!",
    stack: "STAGETWO"
  },
  {
    id: 2,
    lessonName: "Quiz",
    icon: require("../../assets/images/outlinedIcons/taxes.png"),
    isCompleted: false,
    avaiable: false,
    text: "Start the Calculator to water and grow your sprout!",
    stack: "STAGETHREE"
  },
  {
    id: 3,
    lessonName: "Calculator",
    icon: require("../../assets/images/outlinedIcons/insurance.png"),
    isCompleted: false,
    avaiable: false,
    text:
      "You've completed all the compound interest ! Your tree is full grown.",
    stack: "STAGECOMPLETE"
  }
];
const ProgressInfo = ({ navigation }) => {
  const [stages, setStages] = useState(initialData);
  const [currentXp, setCurrentXp] = useState(0);
  const [text, setText] = useState(
    "Start the Introduction to water and grow your sprout!"
  );
  const xp = 20;
  const maxXp = xp * stages.length;

  handleComplete = id => {
    const newStage = stages
      .map(stage => (stage.id === id ? { ...stage, isCompleted: true } : stage))
      .map(stage =>
        stage.id === id + 1 ? { ...stage, avaiable: true } : stage
      );
    setText(newStage[id - 1].text);
    setStages(newStage);
    setCurrentXp(preXp => preXp + xp);
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      {currentXp === 0 ? (
        <ImageLoader
          style={styles.processBanner}
          source={require("../../assets/images/processGrow/grow0.png")}
        />
      ) : null}
      {currentXp === 20 ? (
        <ImageLoader
          style={styles.processBanner}
          source={require("../../assets/images/processGrow/grow1.png")}
        />
      ) : null}
      {currentXp > 20 && currentXp < maxXp ? (
        <ImageLoader
          style={styles.processBanner}
          source={require("../../assets/images/processGrow/grow2.png")}
        />
      ) : null}
      {currentXp === maxXp ? (
        <ImageLoader
          style={styles.processBanner}
          source={require("../../assets/images/processGrow/grow3.png")}
        />
      ) : null}

      <View style={styles.barContainer}>
        <Progress.Bar
          progress={currentXp / maxXp}
          style={styles.bar}
          width={200}
          height={16}
          color={"#7ed321"}
          borderRadius={10}
        />
        {currentXp === maxXp ? (
          <Text style={styles.complete}>COMPLETE!</Text>
        ) : null}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.stageLists}>
        {stages.map(stage => (
          <TouchableOpacity
            key={stage.id}
            handleComplete={handleComplete}
            onPress={() => navigation.navigate(stage.stack)}
            // onPress={() =>
            //   stage.isCompleted || !stage.avaiable
            //     ? null
            //     : handleComplete(stage.id)
            // }
          >
            <View style={styles.container}>
              <View
                style={
                  !stage.avaiable
                    ? styles.inactiveOutline
                    : !stage.isCompleted
                    ? styles.incompletedOutline
                    : styles.outline
                }
              >
                {stage.avaiable ? (
                  <Image
                    style={styles.circle}
                    source={require("../../assets/images/Illustrations/circle.png")}
                  />
                ) : (
                  <Image
                    style={styles.circle}
                    source={require("../../assets/images/Illustrations/circleFalse.png")}
                  />
                )}

                <Image style={styles.icon} source={stage.icon} />
              </View>
              <Text style={styles.subheader}>{stage.lessonName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProgressInfo;
