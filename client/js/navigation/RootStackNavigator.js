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

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ResetPassword: ResetPasswordScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
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
