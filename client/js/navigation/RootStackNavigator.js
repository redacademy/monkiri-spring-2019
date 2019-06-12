import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import AuthScreen from "../screens/SignIn";
import NavigationLayout from "./NavigationLayout";
// export default createAppContainer(
//   createStackNavigator(
//     { Layout: NavigationLayout },
//     {
//       headerMode: "none"
//     }
//   )
// );
const AuthStack = createStackNavigator({ SignIn: AuthScreen });
export default createAppContainer(
  createSwitchNavigator(
    { Auth: AuthScreen, Layout: NavigationLayout },
    {
      headerMode: "none"
    }
  )
);
