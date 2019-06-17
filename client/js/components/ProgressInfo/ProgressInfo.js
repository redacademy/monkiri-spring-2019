import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
const ProgressInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Image
        style={styles.processBanner}
        source={require("../../assets/images/Illustrations/progressInfo.png")}
      />
    </ScrollView>
  );
};

export default ProgressInfo;
