import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  Container: { flex: 1 },
  OnboardingBanner: {
    width: width,
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
    width: width * 0.8,
    flexDirection: "row",
    padding: 15
  },
  text: {
    marginLeft: 10,
    fontWeight: "100"
  }
});
