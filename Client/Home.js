import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Alert } from 'react-native';
import * as firebase from'firebase';
import {Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { ListItem, Separator } from 'native-base';

const firebaseConfig = {
    apiKey: "AIzaSyB4An-mU9xJS1HFK3-wDKHgj_SeplK4c2w",
    authDomain: "proyecto-92f5c.firebaseapp.com",
    databaseURL: "https://proyecto-92f5c.firebaseio.com",
    storageBucket: "proyecto-92f5c.appspot.com"
  }
  
const firebaseApp =  firebase.initializeApp(firebaseConfig); 

export class Home extends React.Component{
  _renderRow = (rowItem, rowId, sectionId) => <Text>{rowItem.title}</Text>;
  _renderSection = (section, sectionId)  => <Text>{section}</Text>;
  
    constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=> r1 != r2});
    this.state = {
      itemDataSourceP: ds,
      itemDataSourceS: ds,
      itemDataSourceV: ds,
      itemDataSourceG: ds,
      itemDataSourceO: ds,
      //
      result: 0
    }
    this.itemsRef =  this.getRef().child('items'); 
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);        
  }

  getResponse(result){
    this.setState({result});
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  componentWillMount(){
    this.getItemsP(this.itemsRef);
    this.getItemsS(this.itemsRef);
    this.getItemsV(this.itemsRef);
    this.getItemsG(this.itemsRef);
    this.getItemsO(this.itemsRef);
  }

  componentDidMount(){
    this.getItemsP(this.itemsRef);
    this.getItemsS(this.itemsRef);
    this.getItemsV(this.itemsRef);
    this.getItemsG(this.itemsRef);
    this.getItemsO(this.itemsRef);
  }

  getItemsP(itemsRef,tipo){
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        if( (child.val().category == "Pregnancy") && (child.val().space < 21)){ // 
          items.push( { title: child.val().name,
                        desp: child.val().note, 
                        _key: child.key} );
        }
      });
      this.setState( {itemDataSourceP: this.state.itemDataSourceP.cloneWithRows(items)} );
    });
  }

  getItemsS(itemsRef,tipo){
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        if( (child.val().category == "Sport") && (child.val().space < 21)){ // 
          items.push( { title: child.val().name,
                        desp: child.val().note, 
                        _key: child.key} );
        }
      });
      this.setState( {itemDataSourceS: this.state.itemDataSourceS.cloneWithRows(items)} );
    });
  }

  getItemsG(itemsRef,tipo){
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        if( (child.val().category == "Gluten Free") && (child.val().space < 21)){ // { // 
          items.push( { title: child.val().name,
                        desp: child.val().note, 
                        _key: child.key} );
        }
      });
      this.setState( {itemDataSourceG: this.state.itemDataSourceG.cloneWithRows(items)} );
    });
  }

  getItemsV(itemsRef,tipo){
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        if( (child.val().category == "Vegan") && (child.val().space < 21)){ // 
          items.push( { title: child.val().name,
                        desp: child.val().note, 
                        _key: child.key} );
        }
      });
      this.setState( {itemDataSourceV: this.state.itemDataSourceV.cloneWithRows(items)} );
    });
  }

  getItemsO(itemsRef,tipo){
    itemsRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) => {
        if( (child.val().category == "Others") && (child.val().space < 21)){ // 
          items.push( { title: child.val().name,
                        desp: child.val().note, 
                        _key: child.key} );
        }
      });
      this.setState( {itemDataSourceO: this.state.itemDataSourceO.cloneWithRows(items)} );
    });
  }

  pressRow(item){
    console.log(item)
  }

  alertItemName = () => {
    alert(item.name)
 }

  renderRow(item){
    return (
      <View>
        <Text  style={styles.container}
          //onPress={() => this.props.navigation.navigate('ProfileScreen',)}>
          onPress={() =>  Alert.alert(
            'Descripcion',
            item.desp,
            [
              {text: 'Cancel' },
              {text: 'Make a plan', onPress: () => this.props.navigation.navigate('ProfileScreen',)}
            ],
            { cancelable: false } )}>
          {item.title}
        </Text>
      </View>
    )
  } 
  
  render() {
    return (
      <View >
        <Text>{this.state.result}</Text>
        <Text style={styles.title}>Nutricionistas</Text>
        {/*<ListView 
          dataSource = {this.state.itemDataSource}
          renderRow={ this.renderRow}
        />*/}
        <Collapse>
          <CollapseHeader>
            <Separator style={styles.expandible} bordered>
              <Text style={styles.text}>Sport</Text>
            </Separator>
          </CollapseHeader>
          <CollapseBody>
            <ListItem>
              <ListView 
                dataSource = {this.state.itemDataSourceS}
                renderRow ={ this.renderRow } 
                />
            </ListItem>
          </CollapseBody>
        </Collapse>

    <Collapse>
      <CollapseHeader>
        <Separator style={styles.expandible} bordered>
          <Text style={styles.text}>Vegan</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
      <ListItem >
        <ListView
          dataSource = {this.state.itemDataSourceV}
          renderRow={ this.renderRow}
        />
        </ListItem>
      </CollapseBody>
    </Collapse>

    <Collapse>
      <CollapseHeader>
          <Separator style={styles.expandible} bordered>
          <Text style={styles.text}>Pregnancy</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
      <ListItem >
        <ListView 
          dataSource = {this.state.itemDataSourceP}
          renderRow={ this.renderRow}
        />
        </ListItem>
      </CollapseBody>
    </Collapse>

    <Collapse>
      <CollapseHeader>
          <Separator style={styles.expandible} bordered>
          <Text style={styles.text}>Gluten free</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
      <ListItem >
        <ListView 
          dataSource = {this.state.itemDataSourceG}
          renderRow={ this.renderRow}
        />
        </ListItem>
      </CollapseBody>
    </Collapse>

    <Collapse>
      <CollapseHeader>
          <Separator style={styles.expandible} bordered>
          <Text style={styles.text}>Others</Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
      <ListItem >
        <ListView 
          dataSource = {this.state.itemDataSourceO}
          renderRow={ this.renderRow}
        />
        </ListItem>
      </CollapseBody>
    </Collapse>
    </View>
    );
  }
}


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
  text: {
    fontSize: 15,
    color: '#3D2A23',
    
  },
  expandible: {
    backgroundColor: '#F2A88C',
    marginTop: 3,
  },
});

export default Home