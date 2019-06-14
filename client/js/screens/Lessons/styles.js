import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  iconContainer: {
    width: "20%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  container: {
    width: "95%",
    flexDirection: "row",
    shadowColor: "grey",
    shadowRadius: 2,
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    borderBottomWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 15,
    elevation: 212
  },
  name: {
    textAlign: "left",
    paddingBottom: 10
  },
  cardContainer: {
    width: "60%",
    justifyContent: "center",
    paddingLeft: 15
  },
  playButton: {
    width: 40,
    height: 40
  },
  button: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center"
  },
  bar: {
    height: 12,
    width: "80%",
    backgroundColor: "#DfF2F6",
    borderRadius: 5
  },
  whiteIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain"
  },
  screenContainer: {
    flex: 1,
    alignItems: "center"
  },
  addButton: {
    width: 20,
    height: 20
  },
  addButtonContainer: {
    backgroundColor: "#f07216",
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    bottom: 30,
    shadowColor: "grey",
    shadowRadius: 2,
    shadowOffset: { height: 0, width: 0 },
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 212
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 50,
   
    backgroundColor: "#fff",
    alignItems: "flex-end",
    borderRadius: 5,

    color: "white",
 
    backgroundColor: "#bbb"
  },
  buttonClicked: {
    backgroundColor: "#f07216",
    color: "#fff",
    height: "92%",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f07216",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  
  },
  buttonNotClicked: {
    backgroundColor: "#ffffff",
    color: "#fff",
    height: "78%",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f07216"
  },
  btnLesson: {
    alignItems: "center",
    justifyContent: "center"
  },
  myLesson: {
    backgroundColor: "#f07216",
    width: "100%",
    height: "100%"
  },
  editButton: {
    alignItems: "flex-end",
    width: "100%",
    marginBottom: 20,
    marginTop: 20
  },

  advancedButton: {
    backgroundColor: "#25BDD8",
    paddingTop: 8,
    paddingBottom: 8,
    width: "20%",
    borderRadius: 20
  },
  buttonColor: {
    textTransform: "capitalize",
    color: "white",
    textAlign: "center",
    width: 80
  },
  head: {
    zIndex: 40,
    backgroundColor: "#f07216",
    flex: 0.3,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  notHead: {
    zIndex: 40,
    backgroundColor: "#fff",
    flex: 0.3,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});
