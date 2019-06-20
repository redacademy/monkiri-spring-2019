import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    flex: 0.95,
    marginTop: "auto",
    marginBottom: "auto"
  },
  content: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10
  },
  title: {
    ...theme.fonts.heading,
    padding: 10
  },
  processBar: {
    margin: 10
  },
  checkin: {
    ...theme.fonts.subheading3,
    color: theme.colors.sunYellow,
    margin: 10
  },
  description: {
    ...theme.fonts.bodytext,
    width: 0.9 * width,
    textAlign: "center"
  },
  icon: {
    width: 0.5 * width,
    height: 0.35 * width,
    resizeMode: "contain",
    margin: 10
  },
  result: {
    ...theme.fonts.bodytext,
    color: theme.colors.monikOrange,
    textAlign: "center",
    margin: 10
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
    marginTop: 10
  },
  orangeButtonText: {
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
  }
});
export default styles;
