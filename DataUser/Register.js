import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export class Register extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return ( < View >

            <
            Text style = { styles.title } > REGISTRATION < /Text>  

            <
            Button title = "CLIENT"
            color = "#91a8c6"
            onPress = {
                () => this.props.navigation.navigate('ClientRegistScreen', )
            }
            />


            <
            Button title = "NUTRITIONIST"
            color = "#7da8e0"
            onPress = {
                () => this.props.navigation.navigate('NutriRegistScreen', )

            }
            />

            <
            /View>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        color: '#26754f',
        fontSize: 25,
        textAlign: 'center',
    }
});

export default Register;