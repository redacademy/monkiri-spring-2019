import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import theme from "../../config/styles";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center"
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    maxWidth: 300,
    marginTop: height * 0.1,
    marginBottom: height * 0.1
  },
  subtitle: {
    color: theme.colors.skyBlue,
    ...theme.fonts.heading,
    letterSpacing: 3
  },
  buttonContainer: {
    marginTop: "10%",
    justifyContent: "space-around",
    alignItems: "center",
    width: width,
    height: height * 0.25
  },
  activeButton: {
    backgroundColor: theme.colors.skyBlue,
    width: "80%",
    height: "auto",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 8
  },
  activeButton2: {
    borderColor: theme.colors.skyBlue,
    borderWidth: 1,
    borderStyle: "solid",
    width: "80%",
    height: "auto",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 8
  },
  activeButtonText: {
    ...theme.fonts.subheading,
    color: "#FFFFFF"
  },
  activeButtonText2: {
    ...theme.fonts.subheading,
    color: theme.colors.skyBlue
  }
});
