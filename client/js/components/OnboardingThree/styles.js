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
    fontWeight: theme.fonts.subheading.fontWeight,
    fontSize: theme.fonts.subheading.fontSize * 1.2,
    letterSpacing: 3
  },
  buttonContainer: {
    marginTop: "10%",
    justifyContent: "space-around",
    alignItems: "center",
    width: width,
    height: height * 0.3
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
  activeButtonText: {
    fontSize: theme.fonts.subheading2.fontSize,
    fontWeight: theme.fonts.subheading2.fontWeight,
    color: "#FFFFFF"
  },
  button: {
    backgroundColor: "#ffffff",
    width: width * 0.8,
    height: "auto",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: theme.colors.skyBlue
  },
  buttonText: {
    fontSize: theme.fonts.subheading2.fontSize,
    fontWeight: theme.fonts.subheading2.fontWeight,
    color: theme.colors.skyBlue
  }
});
