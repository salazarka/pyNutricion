import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, ImageBackground } from 'react-native';
import { ListItem, Separator } from 'native-base';

export class Register extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return ( <
            ImageBackground source = { require('../assets/nutbg.jpg') }
            style = { styles.container } >

            <
            View >

            <
            Text style = { styles.title } > REGISTRATION < /Text>  

            <
            Separator style = { styles.expandible }
            bordered >

            <
            /Separator >


            <
            Button title = "CLIENT"
            color = "#728e75"
            onPress = {
                () => this.props.navigation.navigate('ClientRegistScreen', )
            }
            />


            <
            Separator style = { styles.expandible }
            bordered >

            <
            /Separator >

            <
            Button title = "NUTRITIONIST"
            color = "#aa6d71"
            onPress = {
                () => this.props.navigation.navigate('NutriRegistScreen', )

            }
            />



            <
            /View>


            <
            /ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        marginTop: 100,
        color: '#bf5448',
        fontSize: 25,
        textAlign: 'center',
    },
    expandible: {
        backgroundColor: 'transparent',
        marginTop: 3,
    },
    container: {
        flex: 1,
    }
});

export default Register;