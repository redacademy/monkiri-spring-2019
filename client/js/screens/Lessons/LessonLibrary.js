import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import TextField from "@material-ui/core/TextField";

class LessonLibraryContainer extends Component {
  static navigationOptions = {
    title: "Libray"
  };
  render() {
    return (
      <View>
        <View>
          <View>
            <TextField 
               id="standard-name"
               label="Name"
               className={classes.textField}
               value={values.name}
               onChange={handleChange('name')}
               margin="normal"/>
            <Text>search </Text>
          </View>
          <View style={styles.libraryButtons}>
            <TouchableOpacity style={styles.lButtons}>
              <Text style={styles.libraryBtn}>Beginner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lButtons}>
              <Text style={styles.libraryBtn}>Advanced</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default LessonLibraryContainer;
