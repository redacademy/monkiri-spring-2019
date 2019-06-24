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
  editButton: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 5,
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 25
  },
  editButtonText: {
    ...theme.fonts.subheading2,
    color: "white",
    textTransform: "uppercase"
  },
  backgroundImage: {
    resizeMode: "cover"
  },
  userAvatar: {
    resizeMode: "contain",
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
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center"
  },
  userStatsHeaderContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.7
  },
  headerImage: {
    resizeMode: "stretch",
    position: "absolute",
    bottom: 0,
    zIndex: -5
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
    backgroundColor: theme.colors.seaBlue,
    borderColor: theme.colors.seaBlue
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
    fontSize: theme.fonts.heading.fontSize * 2
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
    ...theme.fonts.bodytext2
  }
});
