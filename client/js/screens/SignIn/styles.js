import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    flex: 0.3,
    resizeMode: "contain"
  },
  form: {
    width: "100%",
    flex: 0.2
  },
  inputFields: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  field: {
    marginBottom: 10,
    width: "90%"
  },
  inputBackground: {
    paddingHorizontal: 10,
    backgroundColor: "rgba(243, 152, 78, 0.5)",
    borderRadius: 10
  },
  input: {
    height: 40
  },
  error: {
    color: "red",
    marginVertical: 5,
    marginLeft: 10
  },
  logInButton: {
    height: "25%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 20
  },
  LogInText: {
    textTransform: "capitalize",
    color: "white"
  },
  content: {
    flex: 0.2,
    justifyContent: "space-evenly"
  },
  forgotPassword: {
    color: "black",
    textDecorationLine: "underline"
  },

  iconsContainer: {
    flexDirection: "row"
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    margin: 10
  }
});
