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
import SurveyDifficultyScreen from "../screens/SurveyDifficulty";
import SurveyLessonsScreen from "../screens/SurveyLessons";

const AuthStack = createStackNavigator(
  {
    Onbarding: OnboardingScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    ResetPassword: ResetPasswordScreen
  },
  {
    headerMode: "none"
  }
);

const SurveyStack = createStackNavigator(
  {
    SurveyDifficulty: SurveyDifficultyScreen,
    SurveyLessons: SurveyLessonsScreen
  },
  {
    headerMode: "none"
  }
);

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
