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
    width: "100%",
    flexDirection: "row",
    shadowColor: "red",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { height: 5, width: 0 }
  },
  name: {
    textAlign: "center",
    
    
  },
  cardContainer: {
    backgroundColor: "white",
    width: "50%"
  }

});
