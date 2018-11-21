import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ImageBackground, ScrollView } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import axios from 'axios';
import { ListItem, Separator } from 'native-base';
class Login extends Component {

    constructor(props) {
            super(props);
            this.state = {
                email: "", //THIS IS A DEFAULT TEXT IN THE INPUT SPACE
                password: ""
            }

        }
        //UPDATES THE USERNAME INPUT
    onChangeInput = (result) => {
            this.setState({ email: result });
        }
        //UPDATES THE PASSWORD INPUT
    onChangePass = (result) => {
        this.setState({ password: result });
    }


    render() {
        return (

            <
            ImageBackground source = { require('../assets/nutbg.jpg') }
            style = { styles.container } >

            <
            ScrollView style = {
                { width: '100%' }
            } >

            <
            View >

            <
            Text style = { styles.title } > NUTRITION CONTROL APP < /Text> 

            <
            Text style = { styles.title } > LOGIN < /Text>  

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
            Separator style = { styles.expandible }
            bordered >

            <
            /Separator >


            <
            Button title = "ENTER"
            color = "#728e75"
            onPress = {
                () =>

                this.props.navigation.navigate('HomeNut', { currentUser: this.state.email })
            }
            />


            <
            Separator style = { styles.expandible }
            bordered >

            <
            /Separator >


            <
            Button title = "REGISTER"
            color = "#aa6d71"
            onPress = {
                () => this.props.navigation.navigate('RegisterScreen', )
            }
            />

            <
            /View>

            <
            /ScrollView> 

            <
            /ImageBackground>

        );

    }
}

// Contains the style of this page
const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%'
    },
    title: {
        marginTop: 30,
        color: 'white',
        fontSize: 25,
        textAlign: 'center',

    },
    property: {
        color: '#252f60',
        fontSize: 20,
    },
    input: {
        width: '100%',
        backgroundColor: 'transparent',
        marginTop: 20,
        fontSize: 20,
        padding: 5
    },
    expandible: {
        backgroundColor: 'transparent',
        marginTop: 3,
    },
    container: {
        flex: 1,
    }
});

export default Login;