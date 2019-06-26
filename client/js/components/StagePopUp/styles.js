import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
    paddingBottom: 0,
    borderRadius: 20
  },
  iconContainer: {
    width: "80%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "8%",
    backgroundColor: theme.colors.sunYellow
  },
  icon: {
    width: 0.25 * width,
    height: 0.25 * width,
    resizeMode: "contain"
  },
  textContainer: {
    width: "100%"
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#bbb"
  },
  title: {
    fontSize: 20,
    margin: 5
  },
  description: {
    lineHeight: 20,
    margin: 5,
    textAlign: "center"
  },
  startButtonContainer: {
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 50,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  startButtonText: {
    color: "#fff"
  },
  closeButtonContainer: {
    backgroundColor: theme.colors.skyBlue,
    position: "absolute",
    right: -0.05 * width,
    top: -0.05 * width,
    width: 0.1 * width,
    height: 0.1 * width,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  closeIcon: {
    color: "#fff"
  },
  burronShadow: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowColor: "grey",
    shadowRadius: 2,
    shadowOffset: { height: 3, width: 0 },
    shadowRadius: 3
  },
  triangleBackground: {
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 0.5 * width,
    borderBottomWidth: 0.3 * width,
    borderBottomColor: "transparent",
    borderLeftColor: "#fff",
    opacity: 0.2,
    transform: [{ rotate: "180deg" }],
    position: "absolute"
  },
  blueTitle: {
    color: theme.colors.skyBlue,
    ...theme.fonts.subheading3
  },
  process: {
    ...theme.fonts.subheading3
  }
});
export default styles;
