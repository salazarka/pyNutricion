import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, ScrollView, View, TouchableWithoutFeedback, Alert, ImageBackground } from 'react-native';
import { ListItem, Separator } from 'native-base';
import axios from 'axios';
const firebaseApp = require('../firebaseconfig.js');

export class NutritionistRegistration extends Component {
    state = {
        category: '',
        name: '',
        note: '',
        space: '',
        email: '',
        password: '',
    }

    onChangeCategory = (category) => {
        this.setState({ category });
    }
    onChangeName = (name) => {
        this.setState({ name });
    }
    onChangeNote = (note) => {
        this.setState({ note });
    }
    onChangeSpace = (space) => {
        this.setState({ space });
    }
    onChangeEmail = (email) => {
        this.setState({ email });
    }
    onChangePass = (password) => {
        this.setState({ password });
    }

    addPostN = () => {
        Alert.alert(
            'Successful registration'
        )
        const URL = 'https://proyecto-92f5c.firebaseio.com/items.json'
        axios({
            method: "POST",
            url: URL,
            data: this.state
        }).then(response => console.log(response.data))
        this.searchItem(this.itemsRef);
    }

    itemsRef = this.getRef().child('items');
    getRef() {
        return firebaseApp.database().ref();
    }
    nutId = ''; //VARIABLE QUE GUARDA EL ID DEL NUTRICIONISTA RECIÉN REGISTRADO 
    searchItem(itemsRef) {
        itemsRef.on('value', (snap) => {
            snap.forEach((child) => {
                if ((child.val().email == this.state.email)) {
                    this.nutId = child.key;
                }
            });
        });
    }

<<<<<<< HEAD
=======
    addPostN = () =>{
        // this.props.addPost(this.state)
        Alert.alert(
            'Successful registratio'
         )
         console.log(this.state)
         const URL ='https://proyecto-92f5c.firebaseio.com/items.json'
 
         axios({
             method:"POST",
             url:URL,
             data:this.state
         }).then(respons =>console.log(Response.data))
         
     }
>>>>>>> 679b5fd44388b8651269dacc35b7e321b23fd2c0

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
            Text style = { styles.property } > Category < /Text> 

            <
            Text style = { styles.property } > (Sport - Pregnancy - GlutenFree - Vegan - Others) < /Text>

            <
            TextInput value = { this.state.category }
            style = { styles.input }
            onChangeText = { this.onChangeCategory }
            /> 

            <
            Text style = { styles.property } > Name: < /Text>     

            <
            TextInput value = { this.state.name }
            style = { styles.input }
            onChangeText = { this.onChangeName }
            /> 

            <
            Text style = { styles.property } > Note: < /Text>     

            <
            TextInput value = { this.state.note }
            style = { styles.input }
            onChangeText = { this.onChangeNote }
            /> 

            <
            Text style = { styles.property } > Quantity Available: < /Text>     

            <
            TextInput value = { this.state.space }
            style = { styles.input }
            onChangeText = { this.onChangeSpace }
            /> 

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
            Button title = "REGISTER"
            color = "#728e75"
            onPress = { this.addPostN }
            />

            <
            Separator style = { styles.expandible }
            bordered >

            <
            /Separator >


            <
            Button title = "CONTINUE"
            color = "#aa6d71"
            onPress = {
                () => this.props.navigation.navigate('HomeNutScreen', { itemId: this.nutId })

            }
            / >


            <
            /View> 


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

export default NutritionistRegistration;