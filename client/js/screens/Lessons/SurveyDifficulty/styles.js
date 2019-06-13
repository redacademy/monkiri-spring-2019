import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 18,
  },
  beginnerContainer: {
    backgroundColor: "#F2C249",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20
  },
  triangleShadowYellow: {
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 170,
    borderBottomWidth: 210,
    borderBottomColor: "transparent",
    borderLeftColor: "#edcc74",
    transform: [{ rotate: "180deg" }],
    position: "absolute"
  },
  beginnerButton: {
    backgroundColor: "#25BDD8",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonColor: {
    color: "white"
  },
  advancedContainer: {
    backgroundColor: "#59c9c9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  triangleShadowBlue: {
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 170,
    borderBottomWidth: 210,
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
    height: 35,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80
  },
  skipText: {
    textAlign: "center",
    fontSize: 18,
    textDecorationLine: "underline",
    paddingTop: 40
  }
});
export default styles;
