import React, { useState, useContext } from "react";
import ImageLoader from "../../components/ImageLoader";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import GifPopUp from "../../components/GifPopUp";
import { styles } from "./styles";
import * as Progress from "react-native-progress";
import LessonsContext from "../../context";
import PropTypes from "prop-types";
const ProgressInfo = ({ navigation }) => {
  const value = useContext(LessonsContext);
  const text = value.text;
  const popUp = value.popUp;
  const stages = value.stages;
  const currentXp = value.currentXp;
  const xp = 20;
  const maxXp = xp * stages.length;

  handleComplete = id => {
    const newStage = stages
      .map(stage => (stage.id === id ? { ...stage, isCompleted: true } : stage))
      .map(stage =>
        stage.id === id + 1 ? { ...stage, avaiable: true } : stage
      );
    value.setText(newStage[id - 1].text);
    value.setStages(newStage);
    setTimeout(() => {
      value.setCurrentXp(xp);
      value.setProgressbar(maxXp);
    }, 300);

    value.addXp(xp);
  };
  handlePopUp = () => {
    setTimeout(() => {
      value.setPopUp(true);
    }, 800);
  };
  handlePopUpClose = () => {
    value.setPopUp(false);
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
            onPress={() =>
              stage.isCompleted || !stage.avaiable
                ? null
                : navigation.navigate(stage.stack, {
                    handleComplete: handleComplete,
                    handlePopUp: handlePopUp
                  })
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
      <GifPopUp openPopUp={popUp} handlePopUp={handlePopUpClose} />
    </ScrollView>
  );
};
ProgressInfo.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default ProgressInfo;
