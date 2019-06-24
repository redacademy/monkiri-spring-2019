import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    textAlign: "center",
    fontSize: 38
  },
  beginnerContainer: {
    backgroundColor: "#F2C249",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "80%",
    height: "37%"
  },
  advancedContainer: {
    backgroundColor: "#59c9c9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "80%",
    height: "37%"
  },
  triangleShadowYellow: {
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 170,
    borderBottomWidth: 260,
    borderBottomColor: "transparent",
    borderLeftColor: "#edcc74",
    transform: [{ rotate: "180deg" }],
    position: "absolute",
    borderRadius: 10
  },
  buttonColor: {
    textTransform: "capitalize",
    color: "white",
    textAlign: "center",
    width: 100
  },
  triangleShadowBlue: {
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 170,
    borderBottomWidth: 260,
    borderBottomColor: "transparent",
    borderLeftColor: "#98CBD3",
    transform: [{ rotate: "180deg" }],
    position: "absolute"
  },
  treePic: {
    width: "40%",
    height: "40%",
    resizeMode: "contain"
  },
  advancedButton: {
    backgroundColor: "#25BDD8",
    marginBottom: 20,
    marginTop: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  skipText: {
    textAlign: "center",
    fontSize: 18,
    textDecorationLine: "underline"
  }
});
export default styles;
