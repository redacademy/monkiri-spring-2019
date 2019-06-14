import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: { flex: 1 },
  OnboardingBanner: {
    width: "100%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%"
  },
  listsContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  lists: {
    width: "80%",
    flexDirection: "row",
    padding: 20
  },
  text: {
    marginLeft: 10,
    fontWeight: "100"
  }
});
