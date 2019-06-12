import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import AuthScreen from "../screens/SignIn";
import NavigationLayout from "./NavigationLayout";
const AuthStack = createStackNavigator({ SignIn: AuthScreen });
export default createAppContainer(
  createSwitchNavigator(
    { Auth: AuthScreen, Layout: NavigationLayout },
    {
      headerMode: "none"
    }
  )
);
