import { StyleSheet } from "react-native";
export default (styles = StyleSheet.create({
  root: {
    width: "100%",
  },
  titleContainer: {
    height:180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:20,
    width:"60%",
    textAlign:"center",
    fontWeight:"300"
  },
  topicListContainer: {
    width:"96%",
    marginLeft: "auto",
    marginRight:"auto"
  },
  buttonContainer: {
    height:100,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  skipButton:{
    padding:20
  },
  skipText:{
    textDecorationLine: 'underline',
  }
}));
