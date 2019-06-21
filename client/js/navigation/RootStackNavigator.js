import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";
import ResetPasswordScreen from "../screens/ResetPassword";
import AuthLoadingScreen from "../screens/AuthLoading";
import NavigationLayout from "./NavigationLayout";
import OnboardingScreen from "../screens/Onboarding";

import SurveyLoadingScreen from "../screens/SurveyLoading";
import SurveyLessonsScreen from "../screens/SurveyLessons";
import SurveyDifficultyScreen from "../screens/SurveyDifficulty";

const AuthStack = createStackNavigator({
  Onbarding: OnboardingScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ResetPassword: ResetPasswordScreen
});

const SurveyStack = createStackNavigator({
  SurveyLoading: SurveyLoadingScreen,
  SurveyDifficulty: SurveyDifficultyScreen,
  SurveyLessons: SurveyLessonsScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Survey: SurveyStack,
      App: NavigationLayout
    },
    {
      initialRouteName: "AuthLoading"
    },
    {
      headerMode: "none"
    }
  )
);
