import React from 'react';
import { Text } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Landing from './src/views/Landing';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';

const AppNavigator = createStackNavigator({
  Landing: {
    screen: Landing
  },
  SignUp: {
    screen: SignUp
  },
  Login: {
    screen: Login
  }
});

export default createAppContainer(AppNavigator);
