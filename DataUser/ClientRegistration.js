import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, ScrollView, View, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import { addPost } from '../Store/actions/';
import { ListItem, Separator } from 'native-base';
console.disableYellowBox = true;
const firebaseApp = require('../firebaseconfig.js');
export class ClientRegistration extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        description: '',
        age: '',
        height: '',
        weight: '',
        boardInfo: '',
    }

    onChangeEmail = (email) => {
        this.setState({ email });
    }
    onChangePass = (password) => {
        this.setState({ password });
    }
    onChangeName = (name) => {
        this.setState({ name });
    }
    onChangeDesc = (description) => {
        this.setState({ description });
    }
    onChangeAge = (age) => {
        this.setState({ age });
    }
    onChangeHeig = (height) => {
        this.setState({ height });
    }
    onChangeWeig = (weight) => {
        this.setState({ weight });
    }

    addPostC = () => {
        Alert.alert(
            'Successful registration'
        )
        console.log(this.state)
        const URL = 'https://proyecto-92f5c.firebaseio.com/client.json'
        axios({
            method: "POST",
            url: URL,
            data: this.state
        }).then(response => console.log(response.data))
        this.searchClient(this.itemsRef);
    }
    itemsRef = this.getRef().child('client');
    getRef() {
        return firebaseApp.database().ref();
    }
    clientId = ''; //VARIABLE QUE GUARDA EL ID DEL CLIENTE RECIÉN REGISTRADO 
    searchClient(itemsRef) {
        itemsRef.on('value', (snap) => {
            snap.forEach((child) => {
                if ((child.val().email == this.state.email)) {
                    this.clientId = child.key;
                }
            });
        });
    }

    render() {
        return ( <
            ImageBackground source = { require('../assets/nutbg.jpg') }
            style = { styles.container } >

            <
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
            onChangeText = { this.onChangeEmail }
            /> 

            <
            Text style = { styles.property } > Password: < /Text>     

            <
            TextInput value = { this.state.password }
            style = { styles.input }
            onChangeText = { this.onChangePass }
            /> 

            <
            Text style = { styles.property } > Name: < /Text>     

            <
            TextInput value = { this.state.name }
            style = { styles.input }
            onChangeText = { this.onChangeName }
            /> 

            <
            Text style = { styles.property } > Description: < /Text>     

            <
            TextInput value = { this.state.description }
            style = { styles.input }
            onChangeText = { this.onChangeDesc }
            /> 

            <
            Text style = { styles.property } > Age: < /Text>     

            <
            TextInput value = { this.state.age }
            style = { styles.input }
            onChangeText = { this.onChangeAge }
            /> 

            <
            Text style = { styles.property } > Height: < /Text>     

            <
            TextInput value = { this.state.height }
            style = { styles.input }
            onChangeText = { this.onChangeHeig }
            /> 

            <
            Text style = { styles.property } > Weight: < /Text>     

            <
            TextInput value = { this.state.weight }
            style = { styles.input }
            onChangeText = { this.onChangeWeig }
            /> 

            <
            Button title = "REGISTER"
            color = "#728e75"
            onPress = { this.addPostC }
            / >

            <
            Separator style = { styles.expandible }
            bordered >

            <
            /Separator >


            <
            Button title = "CONTINUE"
            color = "#aa6d71"
            onPress = {
                () => this.props.navigation.navigate('HomeScreen', { itemId: this.clientId })
            }
            / >

            <
            /View >

            <
            /ScrollView> 


            <
            /ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%'
    },
    title: {
        marginTop: 70,
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
    },
});

export default ClientRegistration;