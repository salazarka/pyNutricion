import React, { Component } from 'react';
import * as firebase from 'firebase';
import NutritionistRegistration from './DataUser/NutritionistRegistration';

const firebaseConfig = {
    apiKey: "AIzaSyB4An-mU9xJS1HFK3-wDKHgj_SeplK4c2w",
    authDomain: "proyecto-92f5c.firebaseapp.com",
    databaseURL: "https://proyecto-92f5c.firebaseio.com",
    storageBucket: "proyecto-92f5c.appspot.com",
    register = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Actions extends Component {
    addNutritionist = () => {
        alert('holis')
    }

    render() {
        return ( <
            View >
            <
            NutritionistRegistration addNut = { this.addNutritionist }
            /> <
            /View>
        );
    }
}


/*
export class Actions {
   
  // ----------------- FUNCIONES PARA LA GESTIÓN DE USUARIOS EN FIREBASE -------------------
   addNutUser(data, uId, number) { // FUNCIÓN QUE GUARDA A UN USUARIO EN LA BASE DE DATOS
    const obj = this.db.database.ref('Usuarios');
    obj.push({email: data, uid: uId, juegoID: number}); // SE DEFINE CUÁLES DATOS SE VAN A GUARDAR
    console.log('Success');
  }
}
export default Actions;*/
/*  getItemsP(itemsRef,tipo){
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
  }*/



/*


export function registerClient(data) {
    const request = axios({
        method: "POST",
        url: `${register}${apiKey}`,
        data: {
            email: data.email,
            password: data.password,
            userType: data.userType,
            description: data.description,
            age: data.age,
            height: data.height,
            weight: data.weight,
            returnSecureToken: true
        },
        headers: {
            "Content-Type": "application/json"
        }

    }).then(response => response.data)

    return {
        type: "clientRegister",
        payload: request
    }
}


export function registerNutritionist(data) {
    const request = axios({
        method: "POST",
        url: `${register}${apiKey}`,
        data: {
            email: data.email,
            password: data.password,
            userType: data.userType,
            description: data.description,
            returnSecureToken: true
        },
        headers: {
            "Content-Type": "application/json"
        }

    }).then(response => response.data)

    return {
        type: "nutritRegister",
        payload: request
    }
}

*/