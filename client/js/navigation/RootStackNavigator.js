import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import SignInScreen from "../screens/SignIn";
import AuthLoadingScreen from "../screens/AuthLoading";
import NavigationLayout from "./NavigationLayout";

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: NavigationLayout
    },
    {
      headerMode: "none"
    }
  )
);
