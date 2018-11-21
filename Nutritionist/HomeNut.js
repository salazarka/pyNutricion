import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

export class HomeNut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clients: ""
        }
    }



    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');

        return ( <
            View >

            <
            Text > WELCOME { JSON.stringify(itemId) }

            <
            /Text>

            <
            /View>
        )
    }

}

export default HomeNut;