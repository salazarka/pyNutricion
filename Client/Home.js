import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Alert, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import axios from 'axios';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { ListItem, Separator } from 'native-base';
import Multimedia from './Multimedia';

import { StackNavigator } from 'react-navigation';
const AppNavigator = StackNavigator({
    MultimediaScreen: { screen: Multimedia },
}, );


const firebaseApp = require('../firebaseconfig.js');
const idClienteA = '';
const idNutriti = '';

export class Home extends React.Component {
    static navigationOptions = {
        title: 'Nutricionist',
    };

    _renderRow = (rowItem, rowId, sectionId) => < Text > { rowItem.title } < /Text>;
    _renderSection = (section, sectionId) => < Text > { section } < /Text>;

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        this.state = {
            itemDataSourceP: ds,
            itemDataSourceS: ds,
            itemDataSourceV: ds,
            itemDataSourceG: ds,
            itemDataSourceO: ds,
        }

        this.itemsRef = this.getRef().child('items');
        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.pressRow.bind(this);
    }


    getRef() {
        return firebaseApp.database().ref();
    }

    componentWillMount() {
        this.getItemsP(this.itemsRef);
        this.getItemsS(this.itemsRef);
        this.getItemsV(this.itemsRef);
        this.getItemsG(this.itemsRef);
        this.getItemsO(this.itemsRef);
    }

    componentDidMount() {
        this.getItemsP(this.itemsRef);
        this.getItemsS(this.itemsRef);
        this.getItemsV(this.itemsRef);
        this.getItemsG(this.itemsRef);
        this.getItemsO(this.itemsRef);
    }

    getItemsP(itemsRef, tipo) {
        itemsRef.on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                if ((child.val().category == "Pregnancy") && (child.val().space < 21)) {
                    items.push({
                        title: child.val().name,
                        note: child.val().note,
                        space: child.val().space,
                        _key: child.key
                    });
                }
            });
            this.setState({ itemDataSourceP: this.state.itemDataSourceP.cloneWithRows(items) });
        });
    }

    getItemsS(itemsRef, tipo) {
        itemsRef.on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                if ((child.val().category == "Sport") && (child.val().space < 21)) { // 
                    items.push({
                        title: child.val().name,
                        note: child.val().note,
                        space: child.val().space,
                        _key: child.key
                    });
                }
            });
            this.setState({ itemDataSourceS: this.state.itemDataSourceS.cloneWithRows(items) });
        });
    }

    getItemsG(itemsRef, tipo) {
        itemsRef.on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                if ((child.val().category == "Gluten Free") && (child.val().space < 21)) { // { // 
                    items.push({
                        title: child.val().name,
                        note: child.val().note,
                        space: child.val().space,
                        _key: child.key
                    });
                }
            });
            this.setState({ itemDataSourceG: this.state.itemDataSourceG.cloneWithRows(items) });
        });
    }

    getItemsV(itemsRef, tipo) {
        itemsRef.on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                if ((child.val().category == "Vegan") && (child.val().space < 21)) { // 
                    items.push({
                        title: child.val().name,
                        note: child.val().note,
                        space: child.val().space,
                        _key: child.key
                    });
                }
            });
            this.setState({ itemDataSourceV: this.state.itemDataSourceV.cloneWithRows(items) });
        });
    }

    getItemsO(itemsRef, tipo) {
        itemsRef.on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                if ((child.val().category == "Others") && (child.val().space < 21)) { // 
                    items.push({
                        title: child.val().name,
                        note: child.val().note,
                        space: child.val().space,
                        _key: child.key
                    });
                }
            });
            this.setState({ itemDataSourceO: this.state.itemDataSourceO.cloneWithRows(items) });
        });
    }

    pressRow(item) {
        console.log(item)
    }

    alertItemName = () => {
        alert(item.name)
    }

    addCustomer = () => { //Función que se encarga de agregar la relación entre cliente y nutricionista
        var newCust = {
            idcliente: idClienteA,
            idNut: idNutriti,
        };
        const URL = 'https://proyecto-92f5c.firebaseio.com/cliente-nut.json'
        axios({
            method: "POST",
            url: URL,
            data: newCust
        }).then(response => console.log(response.data))
    }

    makingPlan(itemS, idC) { //función que se encarga de actualizar información del nutricionista seleccionado    
        category = '';
        email = '';
        name = '';
        note = '';
        password = '';
        idNut = '';
        spaceUp = 0;

        itemRef = this.getRef().child('items');

        //actualiza el campo 'space' del itemS (es el nombre del nutricionista)
        itemRef.on('value', (snap) => {
            snap.forEach((child) => {
                if ((child.val().name == itemS)) {
                    idNut = child.key;
                    this.spaceUp = child.val().space;
                    this.email = child.val().email;
                    this.category = child.val().category;
                    this.name = child.val().name;
                    this.note = child.val().note;
                    this.password = child.val().password;
                    return true;
                }
            });

        });
        const ref = firebaseApp.database().ref(`items/${idNut}`).set({
            category: this.category,
            email: this.email,
            name: this.name,
            note: this.note,
            password: this.password,
            space: this.spaceUp - 1
        });
        idClienteA = idC;
        idNutriti = idNut;
        this.addCustomer();
    }


    renderRow(item) {

        const { navigation } = this.props;

        const itemId = navigation.getParam('itemId', 'NO-ID');

        this.idClientA = itemId;

        return (

            <
            View >

            <
            Text style = { styles.container }
            onPress = {
                () => Alert.alert(
                    'Description',
                    item.note, [
                        { text: 'Cancel' },
                        {
                            text: 'Make a plan',
                            onPress: () => { this.makingPlan(item.title, itemId) }
                        }
                    ], { cancelable: false })
            } > { item.title }

            <
            /Text> 

            <
            /View >
        )
    }

    render() {



        return (

            <
            View >

            {}

            <
            Collapse >


            <
            CollapseHeader >

            <
            Separator style = { styles.expandible }
            bordered >


            <
            Text style = { styles.text } > Sport < /Text> 

            <
            /Separator >


            <
            /CollapseHeader>  

            <
            CollapseBody >

            <
            ListItem >


            <
            ListView dataSource = { this.state.itemDataSourceS }
            renderRow = { this.renderRow }
            /> 

            <
            /ListItem >


            <
            /CollapseBody>  

            <
            / Collapse >

            <
            Collapse >

            <
            CollapseHeader >

            <
            Separator style = { styles.expandible }
            bordered >

            <
            Text style = { styles.text } > Vegan < /Text> 

            <
            /Separator >


            <
            /CollapseHeader>  

            <
            CollapseBody >

            <
            ListItem >

            <
            ListView dataSource = { this.state.itemDataSourceV }
            renderRow = { this.renderRow }
            />  

            <
            /ListItem >


            <
            /CollapseBody>

            <
            /Collapse >

            <
            Collapse >

            <
            CollapseHeader >

            <
            Separator style = { styles.expandible }
            bordered >


            <
            Text style = { styles.text } > Pregnancy < /Text>  


            <
            /Separator > 

            <
            /CollapseHeader> 


            <
            CollapseBody >


            <
            ListItem >
            <
            ListView dataSource = { this.state.itemDataSourceP }
            renderRow = { this.renderRow }
            /> 

            <
            /ListItem > 


            <
            /CollapseBody> 


            <
            / Collapse >

            <
            Collapse >
            <
            CollapseHeader >
            <
            Separator style = { styles.expandible }
            bordered >
            <
            Text style = { styles.text } > Gluten free < /Text>  

            <
            / Separator >


            <
            /CollapseHeader> 

            <
            CollapseBody >


            <
            ListItem >

            <
            ListView dataSource = { this.state.itemDataSourceG }
            renderRow = { this.renderRow }
            />

            <
            /ListItem >


            <
            /CollapseBody>  

            <
            /Collapse >

            <
            Collapse >

            <
            CollapseHeader >

            <
            Separator style = { styles.expandible }
            bordered >


            <
            Text style = { styles.text } > Others < /Text> 

            <
            /Separator >


            <
            /CollapseHeader>  


            <
            CollapseBody >

            <
            ListItem >

            <
            ListView dataSource = { this.state.itemDataSourceO }
            renderRow = { this.renderRow }
            /> 

            <
            /ListItem >


            <
            /CollapseBody> 


            <
            /Collapse >


            <
            Separator style = { styles.expandible }
            bordered >

            <
            /Separator >

            <
            Button title = "CONTINUE"
            color = "#aa6d71"
            onPress = {
                () => this.props.navigation.navigate('ProfileScreen', { itemId: idClienteA })
            }

            / >

            <
            /View> 


        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7c9b83',
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
        backgroundColor: '#aa6d71',
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
    container: {
        flex: 1,
    },

});

export default Home;