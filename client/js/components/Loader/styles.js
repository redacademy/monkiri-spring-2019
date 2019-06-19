import { StyleSheet } from "react-native";
import theme from "../../config/styles";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    ...theme.fonts.subheading2
  }
});
