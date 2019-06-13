import { StyleSheet } from "react-native";
import theme from "../../config/styles";

export const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 20,
    marginBottom: 20
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 20,
    marginRight: 20
  }
});
