import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  iconContainer: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  icon: {
    width: "70%",
    height: "70%",
    resizeMode: "contain"
  },
  name: {
    textAlign: "center",
    paddingTop: 10
  },
  outlineContainer: {
    padding: 0,
    borderWidth: 5,
    borderColor: "#59C9C9"
  },
  triangleBackground: {
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 80,
    borderBottomWidth: 80,
    borderBottomColor: "transparent",
    borderLeftColor: "#fff",
    opacity: 0.2,
    transform: [{ rotate: "180deg" }],
    position: "absolute"
  }
});
export default styles;
