import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, ScrollView, View, TouchableWithoutFeedback, Alert } from 'react-native';


export class NutritionistRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            userType: "",
            description: "",
            counter: "",
        }
    }

    onChangeInput = (result) => {
        this.setState({ email: result });
    }
    onChangePass = (result) => {
        this.setState({ password: result });
    }
    onChangeUserType = (result) => {
        this.setState({ userType: result });
    }
    onChangeDesc = (result) => {
        this.setState({ description: result });
    }
    onChangeCount = (result) => {
        this.setState({ counter: result });
    }

    render() {
        return ( <
            ScrollView style = {
                { width: '100%' }
            } >
            <
            View >

            <
            Text style = { styles.title } > REGISTRATION < /Text>  

            <
            Text style = { styles.property } > Email: < /Text>     

            <
            TextInput value = { this.state.email }
            style = { styles.input }
            onChangeText = { this.onChangeInput }
            /> 

            <
            Text style = { styles.property } > Password: < /Text>     

            <
            TextInput value = { this.state.password }
            style = { styles.input }
            onChangeText = { this.onChangePass }
            /> 

            <
            Text style = { styles.property } > UserType: < /Text>     

            <
            TextInput value = { this.state.userType }
            style = { styles.input }
            onChangeText = { this.onChangeUserType }
            /> 

            <
            Text style = { styles.property } > Description: < /Text>     

            <
            TextInput value = { this.state.description }
            style = { styles.input }
            onChangeText = { this.onChangeDesc }
            /> 

            <
            Text style = { styles.property } > Quantity Available: < /Text>     

            <
            TextInput value = { this.state.counter }
            style = { styles.input }
            onChangeText = { this.onChangeCount }
            /> 


            <
            Button title = "REGISTER"
            color = "#659e6e" /
            >
            <
            /View> 

            <
            /ScrollView> 
        )
    }
}



const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%'
    },
    title: {
        marginTop: 30,
        color: '#26754f',
        fontSize: 25,
        textAlign: 'center',
    },
    property: {
        color: '#252f60',
        fontSize: 20,
    },
    input: {
        width: '100%',
        backgroundColor: 'lightgrey',
        marginTop: 20,
        fontSize: 20,
        padding: 5
    }
});

export default NutritionistRegistration;