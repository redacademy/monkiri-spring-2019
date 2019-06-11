import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { sharedNavigationOptions } from "./Config";
import Ionicons from "react-native-vector-icons/Ionicons";
import LessonsScreen from "../screens/Lessons";
import PartnersScreen from "../screens/Partners";
import ProfileScreen from "../screens/Profile";
import QuestScreen from "../screens/Quests";

const LessonsStack = createStackNavigator(
  { LESSON: LessonsScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const PartnersStack = createStackNavigator(
  { PARTNERS: PartnersScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ProfileStack = createStackNavigator(
  { PROFILE: ProfileScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const QuestStack = createStackNavigator(
  { QUEST: QuestScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    LESSON: LessonsStack,
    QUESTS: QuestStack,
    PARTNERS: PartnersStack,
    PROFILE: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "LESSON") {
          iconName = `ios-book`;
        }
        if (routeName === "QUESTS") {
          iconName = `ios-trophy`;
        }
        if (routeName === "PARTNERS") {
          iconName = `ios-people`;
        }
        if (routeName === "PROFILE") {
          iconName = `ios-contact`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#494b4b",

      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#54bed9"
      }
    }
  }
);
