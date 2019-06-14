import { StyleSheet } from "react-native";
import theme from "../../config/styles";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logo: {
    height: 80,
    width: 80,
    marginTop: 200,
    marginBottom: 20
  },
  field: {
    marginBottom: 8,
    marginTop: 8
  },
  input: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.activeOrange
  },
  error: {
    color: "red"
  },
  btn: {
    marginBottom: 20,
    marginTop: 20,
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 20
  },
  btnText: {
    textTransform: "capitalize",
    color: "white"
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
