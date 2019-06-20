import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  title: {
    ...theme.fonts.heading
  },
  processBar: {},
  checkin: {
    ...theme.fonts.subheading3,
    color: theme.colors.sunYellow
  },
  description: {
    ...theme.fonts.bodytext,
    width: 0.9 * width,
    textAlign: "center"
  },
  icon: {
    width: 0.5 * width,
    height: 0.35 * width,
    resizeMode: "contain"
  }
});
export default styles;
