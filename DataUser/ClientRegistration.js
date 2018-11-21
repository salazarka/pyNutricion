import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, ScrollView, View, Alert } from 'react-native';
import axios from 'axios';
import { addPost } from '../Store/actions';
console.disableYellowBox = true;

export class ClientRegistration extends Component {
    //constructor(props) {
        //super(props);
        state = {
            email: '',
            password: '',
            userType: '',
            description: '',
            age: '',
            height: '',
            weight: ''
        }
    //}

    onChangeEmail = (email) => {
        this.setState({ email });
    }
    onChangePass = (password) => {
        this.setState({ password });
    }
    onChangeUserType = (userType) => {
        this.setState({ userType});
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

    addPostC = () =>{
        // this.props.addPost(this.state)
        Alert.alert(
            'Successful registration'
         )
         console.log(this.state)
         const URL ='https://proyecto-92f5c.firebaseio.com/client.json'
 
         axios({
             method:"POST",
             url:URL,
             data:this.state
         }).then(respons =>console.log(Response.data))
         
     }


    render() {
        return ( <
            ScrollView style = {
                { width: '100%' }
            } >
            <
            View >

            <Text style = { styles.title } > REGISTRATION </Text>  

            <Text style = { styles.property } > Email: </Text>     

            <TextInput value = { this.state.email }
            style = { styles.input }
            onChangeText = { this.onChangeEmail }
            /> 

            <Text style = { styles.property } > Password: </Text>     

            <TextInput value = { this.state.password }
            style = { styles.input }
            onChangeText = { this.onChangePass }
            /> 

            <Text style = { styles.property } > UserType: </Text>     

            <TextInput value = { this.state.userType }
            style = { styles.input }
            onChangeText = { this.onChangeUserType }
            /> 

            <Text style = { styles.property } > Description: </Text>     

            <TextInput value = { this.state.description }
            style = { styles.input }
            onChangeText = { this.onChangeDesc }
            /> 

            <Text style = { styles.property } > Age: </Text>     

            <TextInput value = { this.state.age }
            style = { styles.input }
            onChangeText = { this.onChangeAge }
            /> 

            <Text style = { styles.property } > Height: </Text>     

            <TextInput value = { this.state.height }
            style = { styles.input }
            onChangeText = { this.onChangeHeig }
            /> 

            <Text style = { styles.property } > Weight: </Text>     

            <TextInput value = { this.state.weight }
            style = { styles.input }
            onChangeText = { this.onChangeWeig }
            /> 

            <
            Button title = "REGISTER"
            color = "#659e6e"
            onPress={this.addPostC} /
            >


            </View >

            </ScrollView> 
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

export default ClientRegistration;