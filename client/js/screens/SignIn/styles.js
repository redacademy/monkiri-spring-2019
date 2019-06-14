import { StyleSheet } from "react-native";
import theme from "../../config/styles";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: 150,
    marginBottom: 20
  },
  form: {
    alignItems: "center"
  },
  field: {
    marginBottom: 8,
    marginTop: 8
  },
  input: {
    width: 300,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "rgba(243, 152, 78, 0.5)"
  },
  error: {
    color: "red"
  },
  btn: {
    marginBottom: 20,
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 20
  },
  btnText: {
    textTransform: "capitalize",
    color: "white",
    textAlign: "center",
    width: 100
  },
  forgot: {
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: "underline"
  },
  text: {
    marginBottom: 10,
    marginTop: 10
  },
  iconsContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 20,
    marginRight: 20
  }
});
