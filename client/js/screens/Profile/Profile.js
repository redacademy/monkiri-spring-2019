import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { logOut } from "../../config/models";
import PropTypes from "prop-types";

const Profile = ({ navigation }) => {
  return (
    <View>
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
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

Profile.proptypes = {
  navigation: PropTypes.array.isRequired
};

export default Profile;
