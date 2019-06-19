import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { logOut } from "../../config/models";
import PropTypes from "prop-types";
import { styles } from "./styles";

const Profile = ({ navigation, user }) => {
  console.log(user);
  return (
    <View>
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
