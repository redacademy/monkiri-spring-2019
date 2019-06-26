import React, { createContext, Component } from "react";

const LessonsContext = createContext();

const initialData = [
  {
    id: 1,
    lessonName: "Introduction",
    icon: require("../assets/images/outlinedIcons/business.png"),
    avaiable: true,
    isCompleted: false,
    text: "Keep going ! Start the Quiz to water and grow your sprout!",
    stack: "STAGEONE"
  },
  {
    id: 2,
    lessonName: "Quiz",
    icon: require("../assets/images/outlinedIcons/taxes.png"),
    isCompleted: false,
    avaiable: false,
    text: "Start the Calculator to water and grow your sprout!",
    stack: "STAGETWO"
  },
  {
    id: 3,
    lessonName: "Calculator",
    icon: require("../assets/images/outlinedIcons/insurance.png"),
    isCompleted: false,
    avaiable: false,
    text:
      "You've completed all the compound interest ! Your tree is full grown.",
    stack: "STAGETHREE"
  }
];
class LessonsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopics: {},
      xp: 0,
      stages: initialData,
      popUp: false,
      text: '"Start the Introduction to water and grow your sprout!"',
      currentXp: 0,
      progressbar: 0
    };
  }
  setCurrentXp = newXp => {
    let sum = 0;
    sum += this.state.currentXp + newXp;
    this.setState({ currentXp: sum });
  };
  setStages = newStage => {
    this.setState({ stages: newStage });
  };
  setText = newText => {
    this.setState({ text: newText });
  };
  setPopUp = newPopUp => {
    this.setState({ popUp: newPopUp });
  };
  addLesson = lesson => {
    const currentSelected = this.state.selectedTopics;
    currentSelected[lesson] = true;
    this.setState({ selectedTopics: currentSelected });
  };

  removeLesson = lesson => {
    const currentSelected = this.state.selectedTopics;
    currentSelected[lesson] = false;
    this.setState({ selectedTopics: currentSelected });
  };

  setLessons = selectedTopics => {
    this.setState({ selectedTopics });
  };
  addXp = value => {
    let sum = 0;
    sum += this.state.xp + value;
    this.setState({ xp: sum });
  };

  render() {
    return (
      <LessonsContext.Provider
        value={{
          ...this.state,
          addLesson: this.addLesson,
          removeLesson: this.removeLesson,
          setLessons: this.setLessons,
          addXp: this.addXp,
          setCurrentXp: this.setCurrentXp,
          setStages: this.setStages,
          setText: this.setText,
          setPopUp: this.setPopUp
        }}
      >
        {this.props.children}
      </LessonsContext.Provider>
    );
  }
}

export { LessonsProvider };
export default LessonsContext;
