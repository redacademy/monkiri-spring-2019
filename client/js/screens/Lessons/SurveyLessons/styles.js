import { StyleSheet } from "react-native";
export default (styles = StyleSheet.create({
  root: {
    width: "100%",
    flex:1
  },
  titleContainer: {
    flex:5,
    marginTop:30,
    marginBottom:20,
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
    flex:1,
    width:"96%",
    marginLeft: "auto",
    marginRight:"auto"
  },
  buttonContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  skipButton:{
    padding:20
  },
  skipText:{
    textDecorationLine: 'underline',
  },
  content:{
    flexGrow: 1,
    justifyContent: 'space-between'
  }
}));
