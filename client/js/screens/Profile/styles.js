import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/styles";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around"
  },
  userInfoContainer: {
    flex: 2,
    position: "relative"
  },
  backgroundImage: {
    resizeMode: "cover"
  },
  userAvatar: {
    resizeMode: "center",
    position: "absolute",
    left: 0,
    bottom: width * 0.125,
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125
  },
  userInfo: {
    marginLeft: width * 0.25 + 10
  },
  userName: {
    color: theme.colors.monikOrange,
    ...theme.fonts.subheading
  },
  userEmail: {
    ...theme.fonts.bodytext
  },
  userStatsContainer: {
    flex: 2
  },
  signOutContainer: {
    flex: 0.25
  }
});
