import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
export default (styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 25
  },
  titleContainer: {
    marginVertical: 20,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    width: "60%",
    textAlign: "center",
    fontWeight: "300"
  },
  topicListContainer: {
    width: "96%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 10
  },
  skipText: {
    textDecorationLine: "underline"
  }
}));
