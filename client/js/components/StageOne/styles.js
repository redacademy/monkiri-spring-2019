import { StyleSheet } from "react-native";
import theme from "../../config/styles";
export const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
    padding: "2%"
  },
  heading1: {
    color: "#25BDD8",
    fontWeight: "600"
  },
  compoundInterest: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: '5%'
  },
  simpleVsCompound: {
    color: "white",
    backgroundColor: "#0274ff",
    padding: 5,
    width: "100%",
    fontWeight: "600",
    fontSize: 15,
    alignItems: "center",
    paddingBottom: '2%',
    marginBottom: '2%'
  },
  table: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    borderBottomColor: "#d6d7da",
    borderBottomWidth: 0.5
  },
  heading: {
    fontWeight: "600",
    fontSize: 14,
    paddingBottom: "2%",
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 5
  },
  formula: {
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  interest: {
    padding: 5
  },

  circleOne: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  circleImg: {
    width: 40,
    height: 40
  },
  numberOne: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center"
  },
  one: {
    color: "#fff"
  },
  buttonsContainer: {
    width: "70%",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto"
  },
  orangeButtonContainer: {
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 50,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 10
  },
  orangeButtonText: {
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
