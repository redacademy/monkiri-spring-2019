import { StyleSheet } from "react-native";
import theme from "../../../config/styles";
export default (styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    height:"20%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    // ...theme.fonts.heading
    fontSize:20,
    width:"60%",
    textAlign:"center",
    fontWeight:"300"
  },
  topicListContainer: {
    height:"auto",
    width:"96%",
    marginLeft: "auto",
    marginRight:"auto"
  },
  buttonContainer: {
    height:"auto",
    alignItems: 'center',
    justifyContent: "center",
  },
  button:{
      backgroundColor:theme.colors.monikOrange,
      borderRadius:50,

  },
  buttonText:{
      color:"#fff",
      padding:10,
      paddingLeft:50,
      paddingRight:50,
      fontSize:20,
  },
  skipButton:{
    padding:20
  },
  skipText:{
    textDecorationLine: 'underline',
  }
}));
