import React, { createContext, Component } from "react";

const LessonsContext = createContext();

class LessonsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTopics: {} };
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

  render() {
    return (
      <LessonsContext.Provider
        value={{
          ...this.state,
          addLesson: this.addLesson,
          removeLesson: this.removeLesson,
          setLessons: this.setLessons
        }}
      >
        {this.props.children}
      </LessonsContext.Provider>
    );
  }
}

export { LessonsProvider };
export default LessonsContext;
