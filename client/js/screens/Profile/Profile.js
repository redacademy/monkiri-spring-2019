import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { logOut } from "../../config/models";
import PropTypes from "prop-types";
import { styles } from "./styles";

const Profile = ({ navigation, user }) => {
  return (
    <View style={styles.root}>
      <View style={styles.userInfoContainer}>
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
        <Text>This is the user stats section</Text>
      </View>
      <View style={styles.signOutContainer}>
        <TouchableOpacity
          onPress={async () => {
            try {
              logOut();
              navigation.navigate("Auth");
            } catch (e) {
              return false;
            }
          }}
        >
          <Text>Sign Out</Text>
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
