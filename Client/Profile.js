import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

var state = true;

export class Profile extends Component {
  render() {
    console.log(state);
    //if(state == true){
      Alert.alert(
        'Aviso!',
        'En las próximas 24 horas estará su plan nutricional.'  
      );
      state = false;
    //}

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