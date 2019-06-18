import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import AuthScreen from "../screens/SignIn";
import OnboardingScreen from "../screens/Onboarding";
import NavigationLayout from "./NavigationLayout";

const AuthStack = createStackNavigator({ SignIn: AuthScreen });
const OnboardingStack = createStackNavigator({ Onboarding: OnboardingScreen });
export default createAppContainer(
  createSwitchNavigator(
    {
      // Onboarding: OnboardingScreen,
      // Auth: AuthScreen,
      App: NavigationLayout
    },
    {
      headerMode: "none"
    }
  )
);
