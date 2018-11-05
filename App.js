import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Client/Home';
import Profile from './Client/Profile';
import Login from './DataUser/Login';
import Register from './DataUser/Register';
import ClientRegistration from './DataUser/ClientRegistration';
import NutritionistRegistration from './DataUser/NutritionistRegistration';

const AppNavigator = StackNavigator({
    LoginScreen: { screen: Login },
    RegisterScreen: { screen: Register },
    ClientRegistScreen: { screen: ClientRegistration },
    NutriRegistScreen: { screen: NutritionistRegistration },
    HomeScreen: { screen: Home },
    ProfileScreen: { screen: Profile }

});

export default class App extends React.Component {
    render() {
        return ( <
            AppNavigator / >


        );
    }
}