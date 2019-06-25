import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");
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
    width: 0.95 * width,
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
    elevation: 212,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between"
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
  editModeCardWidth: {
    width: "60%"
  },
  deleteButton: {
    backgroundColor: theme.colors.cherryRed,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop: "auto",
    marginBottom: "auto"
  },
  noBorderRadius: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
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
    textTransform: "uppercase",
    height: "78%",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f07216"
  },
  buttonTextNotClicked: {
    color: "#f07216",
    textTransform: "uppercase"
  },
  buttonTextClicked: {
    color: "#fff",
    textTransform: "uppercase"
  },
  editButtonContainer: {
    alignItems: "flex-end",
    width: 0.95 * width,
    marginBottom: 10,
    marginTop: 15
  },
  advancedButton: {
    backgroundColor: "#25BDD8",
    paddingTop: "2%",
    paddingBottom: "2%",
    width: "23%",
    right: "5%",
    borderRadius: 20
  },
  editButton: {
    backgroundColor: "#25BDD8",
    paddingTop: "2%",
    paddingBottom: "2%",
    borderRadius: 20,
    width: 0.2 * width,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowColor: "grey",
    shadowRadius: 2,
    shadowOffset: { height: 3, width: 0 },
    shadowRadius: 3
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
  //library
  libraryBtn: {
    fontSize: 16,
    height: 25
  },
  libraryButtons: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: "10%",
    justifyContent: "space-around",
    marginLeft: "auto",
    marginRight: "auto"
  },
  selectButtonClicked: {
    backgroundColor: "#25BDD8",
    width: "45%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#25BDD8",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  selectButtonNotClicked: {
    backgroundColor: "#ffff",
    width: "45%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#25BDD8",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  selectButtonTextClicked: {
    color: "white"
  },
  selectButtonTextNotClicked: {
    color: "#25BDD8"
  },
  searchBar: {
    paddingTop: "5%",
    borderRadius: 20,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  libraryContainer: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
    justifyContent: "space-between"
  },
  scrollView: {
    width: "100%",
    height: 0.48 * height
  },
  searchBarContainerStyle: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowColor: "grey",
    shadowRadius: 2,
    shadowOffset: { height: 3, width: 0 },
    shadowRadius: 3
  },
  topisContainer: {
    paddingBottom: "20%"
  },
  dashboard: {
    height: 0.18 * height
  }
});
