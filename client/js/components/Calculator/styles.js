import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  input: {
    width: width * 0.3,
    height: 40,
    borderWidth: 2,
    borderColor: theme.colors.seaBlue,
    padding: 5
  },
  sliderTitle: {
    textAlign: "center"
  },
  highlight: {
    color: "#ee7f33"
  },
  sliderContent: {
    flexDirection: "row",
    alignItems: "center"
  },
  sliderContainer: {
    width: width,
    margin: 5
  },
  slider: {
    width: width * 0.9,
    height: 30
  },
  title: {
    ...theme.fonts.subheading,
    color: theme.colors.skyBlue
  },
  principal: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5
  },
  interest: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5
  },
  compound: {
    margin: 5
  },
  result: {
    margin: 5
  },
  button: {
    borderWidth: 3,
    width: width * 0.4,
    padding: 10,
    borderColor: theme.colors.skyBlue,
    ...theme.fonts.subheading,
    color: "white",
    backgroundColor: theme.colors.skyBlue,
    textAlign: "center",
    marginBottom: 5
  }
});
