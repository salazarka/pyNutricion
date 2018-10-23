import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, AppRegistry, Alert, TouchableOpacity, TouchableHighlight } from 'react-native';
import Home from './Home';

export class Profile extends Component {
  render() {
    Alert.alert(
      'Aviso!',
      'En las próximas 24 horas estará su plan nutricional.'      
    );

    return (
      <View>
        <Text style={styles.text} >Información</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    color: '#4f603c',
    fontSize: 30,
    textAlign: 'center',
  },
});

  export default Profile;