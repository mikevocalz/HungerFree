import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import PantryScreen from "../screens/PantryScreen";
import ProfileScreen from "../screens/ProfileScreen";

import CustomHeader from "../components/CustomHeader";

import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";

let headerDefaultConfig = {
  header: props => <CustomHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  }
};

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <FontAwesome5
      style={{ marginBottom: -3 }}
      size={26}
      focused={focused}
      name={"home"}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

const PantryStack = createStackNavigator({
  Pantry: PantryScreen
});

PantryStack.navigationOptions = {
  tabBarLabel: "Pantries",
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      style={{ marginBottom: -3 }}
      size={26}
      focused={focused}
      name={"food-variant"}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <FontAwesome5
      style={{ marginBottom: -3 }}
      size={26}
      focused={focused}
      name={"user-alt"}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

const tabNav = createBottomTabNavigator(
  {
    HomeStack,
    PantryStack,
    ProfileStack
  },
  {
    initialRouteName: "HomeStack",
    navigationOptions: {
      ...headerDefaultConfig
    },
    tabBarPosition: "bottom",
    initialRouteName: "HomeStack",
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#ccc",
      labelStyle: {
        fontWeight: "bold"
      },

      style: {
        backgroundColor: "#Ff9292",
        borderTopColor: "transparent"
      }
    }
  }
);

const tabNavigator = createStackNavigator(
  {
    tabNav
  },
  {
    headerLayoutPreset: "center",
    headerMode: "float"
  }
);

export default tabNavigator;
