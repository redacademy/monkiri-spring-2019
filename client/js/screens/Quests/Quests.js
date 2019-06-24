import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Quests = ({ tabIndex, switchTab }) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.tabIndex}>
        <View style={styles.tabLayout}>
          <TouchableOpacity
            style={[
              tabIndex !== 0 ? styles.buttonNotClicked : styles.buttonClicked
            ]}
            onPress={() => {
              switchTab(0);
            }}
          >
            <Text
              style={[
                tabIndex !== 0
                  ? styles.buttonTextNotClicked
                  : styles.buttonTextClicked
              ]}
            >
              Discover
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabBorder}>
          <TouchableOpacity
            style={[
              tabIndex !== 1 ? styles.buttonNotClicked : styles.buttonClicked
            ]}
            onPress={() => {
              switchTab(1);
            }}
          >
            <Text
              style={[
                tabIndex !== 1
                  ? styles.buttonTextNotClicked
                  : styles.buttonTextClicked
              ]}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Quests;
