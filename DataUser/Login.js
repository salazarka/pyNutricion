import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

const firebaseApp = require('../firebaseconfig.js');
var stateAlert = true;

class Login extends Component {
    _renderSection = (section, sectionId)  => <Text>{section}</Text>;
  
    constructor(props) {
        super(props);
        this.state = {
            email: "", //THIS IS A DEFAULT TEXT IN THE INPUT SPACE
            password: ""
        }       
    }

    searchInDB () {
        itemsRef =  this.getRef().child('items'); 
        itemsRef.on('value',(snap) => {
            let items = [];
            snap.forEach((child) => {
                if(child.val().email == this.state.email){
                    stateAlert = true;
                    this.props.navigation.navigate('MultimediaScreen', { itemId: child.val() } )
                }
                else{
                    itemsRefCli =  this.getRef().child('client'); 
                    itemsRefCli.on('value',(snap) => {
                        let items = [];
                        snap.forEach((child) => {
                            if(child.val().email == this.state.email){
                                this.props.navigation.navigate('ProfileScreen', { itemId: child.val() } )
                            }
                        });
                    });
                }
            });
        });
        /* if(stateAlert == true){
            Alert.alert(
                'Do you want an account?',
                '',
                [
                  {text: 'No'},
                  {text: 'Yes',  onPress: () => this.props.navigation.navigate('RegisterScreen')}
                ],
                { cancelable: false }
              )
            stateAlert = false;
        } */
    }
    
    getRef(){
        return firebaseApp.database().ref();
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
        return ( <View>

            <Text style = { styles.title } > NUTRITION CONTROL APP </Text> 

            <Text style = { styles.title } > LOGIN </Text>  

            <Text style = { styles.property } > Email: </Text>     

            <TextInput value = { this.state.email }
            style = { styles.input }
            onChangeText = { this.onChangeInput }
            />  

            <Text style = { styles.property } > Password: </Text>  

            <TextInput value = { this.state.password }
            style = { styles.input }
            onChangeText = { this.onChangePass }
            />  

            <Button title = "ENTER"
            color = "#659e6e"
            onPress = {
                () => this.searchInDB()
            }
            />

            <Button title = "REGISTER"
            color = "#92d1b9"
            onPress = {
                () => this.props.navigation.navigate('RegisterScreen', )
            }
            />

            </View >
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