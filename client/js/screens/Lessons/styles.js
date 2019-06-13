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
    width: '100%', 
    height: 50,
    padding: 10,
    backgroundColor: "#f07216",
    top: 10,
    alignItems: 'center',
    borderRadius: 5,
    color: 'white'
  }
});
