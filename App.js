import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Client/Home';
import Profile from './Client/Profile';
import Login from './DataUser/Login';
import Register from './DataUser/Register';
import ClientRegistration from './DataUser/ClientRegistration';
import NutritionistRegistration from './DataUser/NutritionistRegistration';
import Multimedia from './Client/Multimedia';
import Borrar from './DataUser/VerficarEmail';

const AppNavigator = StackNavigator({
    LoginScreen: { screen: Login },
    //HomeScreen: { screen: Home },
    //RegisterScreen: { screen: Register },
    //ClientRegistScreen: { screen: ClientRegistration },
    //NutriRegistScreen: { screen: NutritionistRegistration },
    //BorrarScreen: { screen: Borrar},
    ProfileScreen: { screen: Profile },
    MultimediaScreen: { screen: Multimedia},
    
});

export default class App extends React.Component {
    render() {
        return ( 
            <AppNavigator/>
        );
    }
}