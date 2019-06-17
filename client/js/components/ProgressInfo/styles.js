import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center" },
  processBanner: {
    width: width * 0.95,
    height: height * 0.4,
    resizeMode: "contain"
  }
});
