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
    flex: 2
  },
  backgroundImage: {
    height: "70%",
    resizeMode: "contain"
  },
  userInfo: {
    paddingLeft: width * 0.3,
    marginLeft: 5,
    paddingBottom: 15,
    position: "relative"
  },
  userAvatar: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125
  },
  userName: {
    color: theme.colors.monikOrange,
    ...theme.fonts.subheading
  },
  userEmail: {
    ...theme.fonts.bodytext
  },
  userStatsContainer: {
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center"
  },
  userStatsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.7
  },
  headerImage: {
    width: width * 0.1,
    resizeMode: "contain"
  },
  userStatsHeader: {
    ...theme.fonts.subheading,
    color: "white",
    backgroundColor: theme.colors.skyBlue,
    paddingVertical: 5,
    textAlign: "center",
    width: "100%"
  },
  userProgressContainer: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  userProgressText: {
    ...theme.fonts.bodytext
  },
  userProgressText2: {
    width: "100%",
    textAlign: "right",
    ...theme.fonts.bodytext2
  },
  progressBar: {
    marginVertical: 5,
    backgroundColor: "#e9fbd4",
    borderColor: "#e9fbd4"
  },
  userStatsLessonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  userStatsLessonsText: {
    ...theme.fonts.subheading2,
    marginRight: 5
  },
  userStatsLessons: {
    ...theme.fonts.heading,
    color: theme.colors.sunYellow,
    fontSize: theme.fonts.heading.fontSize * 1.5
  },
  shareButton: {
    backgroundColor: theme.colors.monikOrange,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginBottom: 10
  },
  shareButtonText: {
    ...theme.fonts.subheading2,
    color: "white",
    textTransform: "capitalize"
  },
  signOutContainer: {
    flex: 0.25
  },
  signOut: {
    textDecorationLine: "underline",
    ...theme.fonts.bodytext
  }
});
