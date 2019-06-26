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
    marginTop: "8%"
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
    margin: 5
  },
  buttonsContainer: {
    width: "100%",
    justifyContent: "space-between"
  },
  addButtonContainer: {
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 50,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  addButtonText: {
    color: "#fff"
  },
  quizButtonContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.monikOrange,
    marginTop: 10
  },
  quizButtonText: {
    color: theme.colors.monikOrange
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
  }
});
export default styles;
