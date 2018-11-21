import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity, Image } from 'react-native';
const itemId = require('../Client/Profile.js');

const styles = StyleSheet.create({
    textTitle: {
        color: '#4f603c',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 15,
    },
    input: {
        width: '100%',
        backgroundColor: 'lightgrey',
        marginTop: 20,
        fontSize: 20,
        padding: 5,
    },
  });

export class addBoard extends React.Component{
    static navigationOptions = {
        title: 'Add Comment',
    };
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }       
    }

    onChangeInput = (result) => {
        this.setState({ comment: result });
    }

    send (){
        Alert.alert(this.state.comment);
        itemId.boardinfo = itemId.boardinfo+this.state.comment;
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        console.log("PRUEBA1",itemId)
        itemId.boardinfo = itemId.boardinfo+this.state.comment;
        console.log("PRUEBA2",itemId) 
        return (
          <View>
            <View style={styles.container}>
                <Text>{JSON.stringify(itemId.boardinfo)}</Text>
            </View>
            <TextInput 
                multiline = {true}
                numberOfLines = {1}
                value = { this.state.comment }
                style = { styles.input }
                onChangeText = { this.onChangeInput }
            />  
            <Button title = "SEND"
            color = "#92d1b9"
            onPress = {
                () => this.send(itemId.boardinfo)
            }
            />
          </View>
        )
      }
}
export default addBoard