import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly"
  },
  heading1: {
    color: "red",
    // textAlign: "center",
    color: "#25BDD8",
    fontWeight: "600"
  },
  compoundInterest: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  simpleVsCompound: {
    color: "white",
    // backgroundColor: "#0274ff",
    // padding: 5,

    fontWeight: "600",
    position: "absolute",
    zIndex: 1,
    fontSize: 15
    // alignItems: "center",
  },
  table: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 0.5
    // justifyContent: "space-around"
  },
  heading: {
    fontWeight: "600",
    fontSize: 14,
    paddingBottom: '2%',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,
  
    
 
  },
  formula:{
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  interest:{
    padding: 5
  },
  one:{
    // position: 'absolute'
  }
});
