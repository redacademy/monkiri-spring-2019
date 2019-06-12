import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  PartnersCardTop: {
    flexDirection: "row",
    alignItems: "center",
    height: 90,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    position: "relative"
  },
  PartnersCardIcon: {
    width: 65,
    height: 60,
    marginLeft: 20,
    resizeMode: "contain"
  },
  PartnersCardText: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    color: "#ffffff"
  },
  arrow: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 20,
    height: 20,
    zIndex: 9999
  }
});
