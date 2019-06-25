import { StyleSheet } from "react-native";
import theme from "../../config/styles";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginLeft: "4.5%"
  },
  eachItem: {
    width: "28%",
    paddingBottom: 25,
    marginRight: "auto"
  },
  button: {
    height: 40,
    width: "50%",
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});
export default styles;
