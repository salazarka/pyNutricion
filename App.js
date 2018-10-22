import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Profile from './screens/Profile';

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home },
  ProfileScreen: { screen: Profile }
}); 

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

