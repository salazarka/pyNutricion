import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

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
        return ( < View >

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
            Button title = "ENTER"
            color = "#659e6e"
            onPress = {
                () => alert('Ready')
            }
            />

            <
            Button title = "REGISTER"
            color = "#92d1b9"
            onPress = {
                () => this.props.navigation.navigate('RegisterScreen', )
            }
            />

            <
            /View >
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

export default Login;