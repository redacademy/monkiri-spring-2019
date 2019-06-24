import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingBottom: 0,
    borderRadius: 20
  },
  gif: {
    width: "100%",
    height: 0.5 * height,
    resizeMode: "contain"
  },
  closeButtonContainer: {
    backgroundColor: theme.colors.skyBlue,
    position: "absolute",
    right: -0.05 * width,
    top: -0.05 * width,
    width: 0.1 * width,
    height: 0.1 * width,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  closeIcon: {
    color: "#fff"
  },
  burronShadow: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowColor: "grey",
    shadowRadius: 2,
    shadowOffset: { height: 3, width: 0 },
    shadowRadius: 3
  }
});
export default styles;
