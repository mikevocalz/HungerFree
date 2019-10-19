import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PantryScreen from '../screens/PantryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlaceDetails from '../screens/PlaceDetails';

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
	PlaceDetails: PlaceDetails
});

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={'ios-home'} />
};

const PantryStack = createStackNavigator({
	Pantry: PantryScreen
});

PantryStack.navigationOptions = {
	tabBarLabel: 'Pantries',
	tabBarIcon: ({ focused }) => (
		<MaterialCommunityIcons
			style={{ marginBottom: -3 }}
			size={26}
			focused={focused}
			name={'food-variant'}
			color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
		/>
	)
};

const ProfileStack = createStackNavigator({
	Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
	tabBarLabel: 'Profile',
	tabBarIcon: ({ focused }) => (
		<FontAwesome5
			style={{ marginBottom: -3 }}
			size={26}
			focused={focused}
			name={'user-alt'}
			color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
		/>
	)
};

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	PantryStack,
	ProfileStack
});

export default tabNavigator;
