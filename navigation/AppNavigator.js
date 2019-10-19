import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";
import LandingScreen from "../screens/LandingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoadingScreen from "../screens/LoadingScreen";

const AuthStack = createStackNavigator(
  {
    Landing: {
      screen: LandingScreen
    },
    SignIn: {
      screen: SignInScreen
    },
    SignUp: {
      screen: SignUpScreen
    }
  },
  {
    initialRouteName: "SignIn"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      //Loading: LoadingScreen,
      Welcome: WelcomeScreen,
      Auth: AuthStack,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "Auth"
    }
  )
);
