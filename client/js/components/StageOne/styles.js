import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  title: {
    flex: 1,
    
    width: "100%",

    padding: "5%"
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  digitalCurrency: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase"
  },
  progressBar: {
    marginBottom: 10
  },
  heading1: {
    color: "#25BDD8",
    fontWeight: "600",
    
  },
  compoundInterest: {
    // Top: '3%',
    marginTop: height * 0.02,
    marginBottom: height * 0.03
  },
  compoundInterest1: {
    flexDirection: "row",
    flexWrap: "wrap",

    
  },
  cI: {
    marginTop: height * 0.04,
    justifyContent: 'center'
  },
  simpleVsCompound: {
    color: "white",
    backgroundColor: theme.colors.skyBlue,
    // padding: 15,
    width: width * 0.9,
    fontWeight: "600",
    fontSize: 15,
    alignItems: "center",
    // paddingBottom: "2%",
    textAlign: "center",
    // marginBottom: '3%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%'
    
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
    padding: 5,
    lineHeight: 20,
  },

  circleOne: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  circleTwo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    // marginTop: '5%'
  },
  circleImg: {
    width: 40,
    height: 40
  },
  numberOne: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    lineHeight: 20,
  },
  one: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400"
  },
  buttonsContainer: {
    width: 0.7 * width,
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "5%"
  },
  orangeButtonContainer: {
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 50,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
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
  },
  textOne: {
    paddingTop: "3%",
    paddingBottom:  "8%",
    lineHeight: 20,

  },
  textTwo: {
    paddingTop: 15,
    lineHeight: 20
  }
});
