import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, AppRegistry, StatusBar, ListView, TouchableHighlight } from 'react-native';
import * as firebase from'firebase';
import { StackNavigator } from 'react-navigation';
import Profile from './Profile';

const var1 = 'hi';

const firebaseConfig = {
    apiKey: "AIzaSyB4An-mU9xJS1HFK3-wDKHgj_SeplK4c2w",
    authDomain: "proyecto-92f5c.firebaseapp.com",
    databaseURL: "https://proyecto-92f5c.firebaseio.com",
    storageBucket: "proyecto-92f5c.appspot.com"
  }
  
const firebaseApp =  firebase.initializeApp(firebaseConfig); 

export class Home extends React.Component{
    constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 != r2});
    this.state = {
      itemDataSource: ds
    }
    this.itemsRef =  this.getRef().child('items'); 

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
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

    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().name,
          _key: child.key
        });
      });
      this.setState(
        {
          itemDataSource: this.state.itemDataSource.cloneWithRows(items)
        });
    });
    
  }

  pressRow(item){
    console.log(item)
  }

  renderRow(item){
    return (
      <TouchableHighlight onPress ={() =>{
        //this.pressRow(item);
        //alert(item.title)
        var1 = item.title;
        alert(var1);
      }}>
        <View>
          <Text  style={styles.container}
           onPress={() => this.props.navigation.navigate('ProfileScreen',{var1:this.state.var1})} 
           >
            {item.title}
          </Text>
          <Text>{this.state.var1}</Text>
        </View>
        </TouchableHighlight>
        
    )

  } 
  
  render() {
    return (
      <View >
        <Text style={styles.text}>Nutricionistas</Text>
        <ListView 
          dataSource = {this.state.itemDataSource}
          renderRow={ this.renderRow}
        />
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    height: 50,
    flex: 1,
  },
  text: {
    marginTop: 30,
    color: '#4f603c',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Home