import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

var state = true;

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    color: '#4f603c',
    fontSize: 30,
    textAlign: 'center',
  },
  textButton: {
    color: '#4f603c',
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#CBD9D6',
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 40,
    height: 40,
    marginRight:10
  }
});

export class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Information',
      headerRight: (
        <TouchableHighlight onPress={() => navigation.navigate('MultimediaScreen')}>
      <Image 
        style={styles.icon}
        source = {require('../Image/book.png')}
      />
      </TouchableHighlight>     
      )
    };
  };

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
  };

  static defaultProps = {
    icon: 'md-menu',
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    console.log(state);
    if(state == false){
      Alert.alert(
        'Aviso!',
        'En las próximas 24 horas estará su plan nutricional.'  
      ); 
      state = false;
    }

    return (
      <View>
        <Text>Your plan is created by {JSON.stringify(itemId)}</Text>
      </View>
    )
  }
}

export default Profile;