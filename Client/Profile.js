import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';



var state = true;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  text: {
    color: '#4f603c',
    fontSize: 15,
    marginTop: 5,
    alignSelf: 'flex-start',
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
  },
  textTitle: {
      color: '#4f603c',
      fontSize: 30,
      textAlign: 'center',
      marginTop: 15,
  },
});

export class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Information',
      headerRight: (
      <TouchableHighlight onPress={() => navigation.navigate('MultimediaScreen')}>
          <Image 
            style={styles.icon}style={{ width: 40, height: 40}}
            source = {require('../Image/book.png')}
            
          />
      </TouchableHighlight>),
      headerLeft: (
      <TouchableHighlight onPress={() => navigation.navigate('MultimediaScreen')}>
      <Image 
        style={styles.icon}style={{ width: 40, height: 40, marginLeft:260}}
        source = {require('../Image/addNote.png')}
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
    if(state == false){
      Alert.alert(
        'Aviso!',
        'En las próximas 24 horas estará su plan nutricional.'  
      ); 
      state = false;
    }

    return (
      <View>
        <Text style={styles.textTitle}>Board</Text>
        <View style={styles.container}>
            <Text>{JSON.stringify(itemId.boardinfo)}</Text>
          </View>
      </View>
    )
  }
}

export default Profile;