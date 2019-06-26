import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  Container: { flex: 1 },
  OnboardingBanner: {
    width: "100%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.1
  },
  listsContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  lists: {
    width: "80%",
    flexDirection: "row",
    padding: 15
  },
  text: {
    marginLeft: 10,
    ...theme.fonts.bodytext
  }
});
