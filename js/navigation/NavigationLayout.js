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
  { Lesson: LessonsScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const PartnersStack = createStackNavigator(
  { Partners: PartnersScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ProfileStack = createStackNavigator(
  { Profile: ProfileScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const QuestStack = createStackNavigator(
  { Quest: QuestScreen },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Lesson: LessonsStack,
    Quests: QuestStack,
    Partners: PartnersStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Lesson") {
          iconName = `ios-book`;
        }
        if (routeName === "Quests") {
          iconName = `ios-trophy`;
        }
        if (routeName === "Partners") {
          iconName = `ios-people`;
        }
        if (routeName === "Profile") {
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
