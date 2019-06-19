import React, { useState } from "react";
import ImageLoader from "../ImageLoader";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import * as Progress from "react-native-progress";
const initialData = [
  {
    id: 1,
    lessonName: "Introduction",
    icon: require("../../assets/images/outlinedIcons/business.png"),
    avaiable: true,
    isCompleted: false
  },
  {
    id: 2,
    lessonName: "Quiz",
    icon: require("../../assets/images/outlinedIcons/taxes.png"),
    isCompleted: false,
    avaiable: false
  },
  {
    id: 3,
    lessonName: "Calculator",
    icon: require("../../assets/images/outlinedIcons/insurance.png"),
    isCompleted: false,
    avaiable: false
  }
];
const ProgressInfo = () => {
  const [stages, setStages] = useState(initialData);
  const [currentXp, setCurrentXp] = useState(0);
  const xp = 20;
  const maxXp = xp * stages.length;

  handleComplete = id => {
    const newStage = stages
      .map(stage => (stage.id === id ? { ...stage, isCompleted: true } : stage))
      .map(stage =>
        stage.id === id + 1 ? { ...stage, avaiable: true } : stage
      );
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
      <View style={styles.stageLists}>
        {stages.map(stage => (
          <TouchableOpacity
            key={stage.id}
            onPress={() =>
              stage.isCompleted || !stage.avaiable
                ? null
                : handleComplete(stage.id)
            }
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
