import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10
  },
  title: {
    ...theme.fonts.heading,
    padding: 10
  },
  processBarContainer: {
    flexDirection: "row"
  },
  processBar: {
    margin: 10
  },
  processText: {
    ...theme.fonts.subheading2,
    marginLeft: 5
  },
  lessonCompleteTitle: {
    ...theme.fonts.heading,
    color: theme.colors.sunYellow,
    margin: 10
  },
  iconContainer: {
    alignItems: "center"
  },
  outline: {
    borderColor: theme.colors.seaBlue,
    borderWidth: 4,
    width: 0.3 * width,
    height: 0.3 * width,
    borderRadius: 0.15 * width,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 0.24 * width,
    height: 0.24 * width,
    resizeMode: "contain"
  },
  icon: {
    position: "absolute",
    width: 0.15 * width,
    height: 0.15 * width,
    resizeMode: "contain"
  },
  subheader: {
    ...theme.fonts.subheading,
    marginTop: 10,
    marginBottom: 10
  },
  summaryContainer: {
    backgroundColor: theme.colors.skyBlue,
    width: 0.9 * width,
    minHeight: 0.25 * height,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around"
  },
  bookmarkIcon: {
    width: 30,
    height: 50,
    resizeMode: "contain"
  },
  congratulationTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10
  },
  congratulation: {
    ...theme.fonts.subheading,
    color: "#fff",
    marginLeft: 10
  },
  subTitle: {
    ...theme.fonts.subheading3,
    color: "#fff",
    marginBottom: 15
  },
  eachItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 5
  },
  yellowLeaf: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    marginRight: 10
  },
  itemText: {
    ...theme.fonts.bodytext2,
    color: "#fff"
  },

  buttonsContainer: {
    width: "70%",
    justifyContent: "space-between"
  },
  selectButtonContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.skyBlue,
    marginTop: 10
  },
  selectButtonText: {
    color: theme.colors.skyBlue
  },
  clickedButtonContainer: {
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 50,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  clickedButtonText: {
    color: "#fff"
  },
  orangeButtonContainer: {
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 50,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop:15
  },
  orangeButtonText: {
    color: "#fff",
    ...theme.fonts.subheading
  },
  burronShadow: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowColor: "grey",
    shadowRadius: 2,
    shadowOffset: { height: 3, width: 0 },
    shadowRadius: 3
  }
});
export default styles;
