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
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 212
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
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

    height: "78%",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f07216"
  },
  buttonTextNotClicked: {
    color: "#f07216"
  },
  buttonTextClicked: {
    color: "#fff"
  },
  editButton: {
    alignItems: "flex-end",
    width: "100%",
    marginBottom: 10,
    marginTop: 5
  },
  advancedButton: {
    backgroundColor: "#25BDD8",
    paddingTop: "2%",
    paddingBottom: "2%",
    width: "23%",
    right: "5%",
    borderRadius: 20
  },
  buttonColor: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center"
  },
  tabIndex: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    marginTop: 20
  },
  tabLayout: {
    flex: 0.5,
    height: "100%",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  tabBorder: {
    flex: 0.5,
    height: "100%",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  libraryBtn: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    height: 25,
    
  },
  libraryButtons: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: "10%"
  },
  lButtons: {
    backgroundColor: "#25BDD8",
    paddingTop: "2%",

    width: "50%",

    borderRadius: 20
  },
  searchBar: {
    paddingTop: 20,
    borderRadius: 20,
    paddingBottom: 20,
    width: "100%",

    paddingLeft: 20,
    paddingRight: 20
  },
  topicListContainer: {
    width: "96%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  libraryContainer: {
    margin: "5%"
  }
});
