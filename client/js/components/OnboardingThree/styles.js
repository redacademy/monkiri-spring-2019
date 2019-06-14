import { StyleSheet } from "react-native";
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
    marginTop: "20%",
    marginBottom: "10%"
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
    width: "100%",
    height: "30%"
  },
  activeButton: {
    backgroundColor: theme.colors.skyBlue,
    width: "80%",
    height: "auto",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  activeButtonText: {
    fontSize: theme.fonts.subheading2.fontSize,
    fontWeight: theme.fonts.subheading2.fontWeight,
    color: "#FFFFFF"
  },
  button: {
    backgroundColor: "#ffffff",
    width: "80%",
    height: "auto",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.skyBlue
  },
  buttonText: {
    fontSize: theme.fonts.subheading2.fontSize,
    fontWeight: theme.fonts.subheading2.fontWeight,
    color: theme.colors.skyBlue
  }
});
