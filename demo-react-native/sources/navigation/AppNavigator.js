import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/main';
import EditPlayer from '../screens/editPlayer';
import AddPlayer from '../screens/addPlayer';

export default createAppContainer(
	createStackNavigator(
		{
			Main: { screen: MainScreen },
			Edit: { screen: EditPlayer },
			Add: { screen: AddPlayer }
		},
		{
			initialRouteName: 'Main',
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: '#4962f6'
				},
				headerTintColor: '#ffffff',
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			}
		}
	)
);
