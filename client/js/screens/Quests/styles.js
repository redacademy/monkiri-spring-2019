import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center"
  },
  buttonClicked: {
    backgroundColor: "#f07216",
    color: "#fff",
    height: "92%",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f07216",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  buttonNotClicked: {
    backgroundColor: "#ffffff",
    textTransform: "uppercase",
    height: "78%",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f07216"
  },
  buttonTextNotClicked: {
    color: "#f07216",
    textTransform: "uppercase"
  },
  buttonTextClicked: {
    color: "#fff",
    textTransform: "uppercase"
  },
  tabIndex: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    marginTop: 20
  },
  tabLayout: {
    flex: 0.5,
    height: "100%",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  tabBorder: {
    flex: 0.5,
    height: "100%",
    justifyContent: "flex-end",
    flexDirection: "column"
  }
});
