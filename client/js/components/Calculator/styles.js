import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  input: { width: 100, height: 40, borderWidth: 2 },
  principal: {
    flexDirection: "row",
    alignItems: "center"
  },
  interest: {
    flexDirection: "row",
    alignItems: "center"
  }
});
