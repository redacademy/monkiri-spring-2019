import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  Container: { flex: 1, alignItems: "center" },
  OnboardingBanner: {
    width: "100%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.1
  },
  listsContainer: {
    width: "80%",
    height: height * 0.3,
    alignItems: "center",
    justifyContent: "center"
  },
  lists: {
    width: "100%",
    flexDirection: "row",
    padding: 15
  },
  text: {
    marginLeft: 10,
    fontWeight: "100"
  }
});
