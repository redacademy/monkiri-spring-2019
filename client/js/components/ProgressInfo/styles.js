import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import theme from "../../config/styles";
export const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center" },
  processBanner: {
    width: width * 0.95,
    height: height * 0.4,
    resizeMode: "contain"
  },
  barContainer: {
    marginBottom: height * 0.05,
    position: "relative",
    justifyContent: "center"
  },
  bar: {
    backgroundColor: "#e9fbd4",
    borderColor: "#e9fbd4"
  },
  complete: {
    color: "#ffffff",
    fontWeight: theme.fonts.heading.fontWeight,
    fontSize: 12,
    position: "absolute",
    right: 5
  },
  stageLists: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  inactiveOutline: {
    borderColor: "#d9d9d9",
    borderWidth: 3,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  incompletedOutline: {
    borderColor: "#beecf4",
    borderWidth: 3,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  outline: {
    borderColor: theme.colors.seaBlue,
    borderWidth: 3,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  },
  icon: {
    position: "absolute",
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  container: {
    alignItems: "center"
  },
  subheader: {
    marginTop: 5
  }
});
