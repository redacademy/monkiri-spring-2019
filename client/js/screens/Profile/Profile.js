import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { logOut } from "../../config/models";
import PropTypes from "prop-types";
import { styles } from "./styles";
import theme from "../../config/styles";
import * as Progress from "react-native-progress";

const Profile = ({ navigation, user }) => {
  const maxXp = 4000;
  const currentXp = 600;
  return (
    <View style={styles.root}>
      <View style={styles.userInfoContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <Image
          style={styles.backgroundImage}
          source={require("../../assets/images/profile-background.png")}
        />
        <Image style={styles.userAvatar} source={{ uri: user.image }} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.userStatsContainer}>
        <View style={styles.userStatsHeaderContainer}>
          <Text style={styles.userStatsHeader}>Level 1: NoviceLearner</Text>
          <Image
            style={styles.headerImage}
            source={require("../../assets/images/trophies-banner.png")}
          />
        </View>

        <View style={styles.userProgressContainer}>
          <Text style={styles.userProgressText}>
            {maxXp - currentXp} xp until you react the next level!
          </Text>
          <Progress.Bar
            progress={currentXp / maxXp}
            style={styles.progressBar}
            width={200}
            height={16}
            color={theme.colors.seaBlue}
            borderRadius={10}
          />
          <Text style={styles.userProgressText2}>
            {currentXp}/{maxXp}xp
          </Text>
        </View>
        <View style={styles.userStatsLessonsContainer}>
          <Text style={styles.userStatsLessonsText}>Lessons Completed:</Text>
          <Text style={styles.userStatsLessons}>0</Text>
        </View>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share your stats</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signOutContainer}>
        <TouchableOpacity
          onPress={async () => {
            try {
              await logOut();
              navigation.navigate("Auth");
            } catch (e) {
              return false;
            }
          }}
        >
          <Text style={styles.signOut}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Profile.proptypes = {
  navigation: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

export default Profile;
