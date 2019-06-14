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
    paddingBottom: 30
  },
  button: {
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 50
  },
  buttonText: {
    color: "#fff",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  }
});
export default styles;
