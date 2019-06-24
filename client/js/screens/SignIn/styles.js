import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  logoContainer: {
    height: height * 0.4,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    resizeMode: "contain"
  },
  formContainer: {
    width: width
  },
  form: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  formField: {
    marginBottom: 10,
    width: width * 0.9
  },
  formInputBackground: {
    paddingHorizontal: 10,
    backgroundColor: "rgba(243, 152, 78, 0.5)",
    borderRadius: 10
  },
  formInput: {
    height: 40,
    ...theme.fonts.subheading2
  },
  errorMessage: {
    color: "red",
    marginVertical: 5,
    marginLeft: 10,
    ...theme.fonts.bodyText
  },
  logInButton: {
    marginTop: 10,
    height: 30,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 20
  },
  LogInText: {
    textTransform: "capitalize",
    color: "white",
    ...theme.fonts.subheading
  },
  contentContainer: {
    height: height * 0.25,
    justifyContent: "space-evenly"
  },
  bodyText2: {
    color: "black",
    textDecorationLine: "underline",
    ...theme.fonts.bodyText2
  },
  bodyText: {
    ...theme.fonts.bodyText
  },
  iconsContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  icon: {
    height: width * 0.1,
    width: width * 0.1,
    resizeMode: "contain",
    marginHorizontal: 10
  }
});
