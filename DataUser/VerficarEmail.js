import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Alert, Button, TouchableHighlight, Image } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { ListItem, Separator } from 'native-base';
import Multimedia from '../Client/Multimedia';

const firebaseApp = require('../firebaseconfig.js');

export class VerificarEmail extends Component {
    _renderSection = (section, sectionId)  => <Text>{section}</Text>;
  
    constructor(props){
    super(props);
  }

  searchInDB () {
    itemsRef =  this.getRef().child('items'); 
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        if(child.val().email == "ricardoH@gmail.com"){
            alert(child.val().name)
            //this.props.navigation.navigate('ProfileScreen', { itemId: child.val() } )
        }
      });
    });  
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  componentWillMount(){
    this.getItems(this.itemsRef);
  }

  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef){
    /* itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        if(child.val().email == "ricardoH@gmail.com"){
            alert("item.name")
            //this.props.navigation.navigate('ProfileScreen', { itemId: child.val() } )
        }
      });
    });   */
  }  

  render () {
    return(
      <View>
      {
        <Button title = "ENTER"
          color = "#659e6e"
          onPress = {
          () => this.searchInDB
          ()
        }/>
      }
      </View>
    ) 
  }}
  
export default VerificarEmail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8DA593',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    marginTop: 3,
  },
  title: {
    marginTop: 30,
    color: '#4f603c',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#3D2A23',
  },
  expandible: {
    backgroundColor: '#F2A88C',
    marginTop: 3,
  },
  button: {
    backgroundColor: '#CBD9D6',
    marginTop: 10,
    marginBottom: 10,
    width: 150,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



