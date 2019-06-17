import { StyleSheet } from "react-native";
import theme from "../../config/styles";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  eachItem: {
    width: "28%",
    paddingBottom: 25
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
