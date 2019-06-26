import React, { createContext, Component } from "react";

const LessonsContext = createContext();

class LessonsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTopics: {}, xp: 0 };
  }

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
          addXp: this.addXp
        }}
      >
        {this.props.children}
      </LessonsContext.Provider>
    );
  }
}

export { LessonsProvider };
export default LessonsContext;
