import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

var state = true;
const idClienteA = '';

const styles = StyleSheet.create({
  text: {
    color: '#4f603c',
    fontSize: 15,
    marginTop: 50,
    marginLeft: 20
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 10,
    borderRadius: 5,
  },
});

export class Profile extends Component {
  static navigationOptions = {
    title: 'Board',
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
    this.idClientA = itemId;
    if(state == false){
      Alert.alert(
        'Aviso!',
        'En las próximas 24 horas estará su plan nutricional.'  
      ); 
      state = false;
    }

    return (
      
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableHighlight onPress={() => navigation.navigate('AddBoardScreen',{itemId })}>
          <Image 
            style={styles.icon}
            source = {require('../Image/addNote.png')}
          />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('MultimediaScreen')}>
              <Image 
                style={styles.icon}
                source = {require('../Image/book.png')}
              />
          </TouchableHighlight>
        </View>
        <Text style={styles.text}>{JSON.stringify(itemId.boardinfo)}</Text>
        </View>
    )
  }
}

export default Profile;