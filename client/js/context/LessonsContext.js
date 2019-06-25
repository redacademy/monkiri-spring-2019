import React, { createContext, Component } from "react";
import topics from "../helpers/topics";

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

  render() {
    return (
      <LessonsContext.Provider
        value={{
          ...this.state,
          addLesson: this.addLesson,
          removeLesson: this.removeLesson
        }}
      >
        {this.props.children}
      </LessonsContext.Provider>
    );
  }
}

export { LessonsProvider };
export default LessonsContext;
