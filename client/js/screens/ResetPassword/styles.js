import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: height * 0.15,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logo: {
    width: height * 0.4,
    resizeMode: "contain"
  },
  formContainer: {
    width: "100%"
  },
  form: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  formField: {
    marginBottom: 10,
    width: "90%"
  },
  formInputBackground: {
    paddingHorizontal: 10,
    backgroundColor: "rgba(243, 152, 78, 0.5)",
    borderRadius: 10
  },
  formInput: {
    height: 40
  },
  errorMessage: {
    color: "red",
    marginVertical: 5,
    marginLeft: 10
  },
  submitButton: {
    marginTop: 10,
    height: 30,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 20
  },
  submitText: {
    textTransform: "capitalize",
    color: "white"
  },
  bodyText: {
    maxWidth: width * 0.7,
    textAlign: "center",
    marginVertical: 20
  }
});
