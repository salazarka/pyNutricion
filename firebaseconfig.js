import * as firebase from 'firebase';

/* const config = {
    apiKey: "AIzaSyB4An-mU9xJS1HFK3-wDKHgj_SeplK4c2w",
    authDomain: "proyecto-92f5c.firebaseapp.com",
    databaseURL: "https://proyecto-92f5c.firebaseio.com",
    storageBucket: "proyecto-92f5c.appspot.com"
}
  
  firebase.initializeApp(config);

  var firebaseDbh = firebase.database();
  
  module.exports = firebaseDbh; */
  const firebaseConfig = {
    apiKey: "AIzaSyB4An-mU9xJS1HFK3-wDKHgj_SeplK4c2w",
    authDomain: "proyecto-92f5c.firebaseapp.com",
    databaseURL: "https://proyecto-92f5c.firebaseio.com",
    projectId: "proyecto-92f5c",
    storageBucket: "proyecto-92f5c.appspot.com",
    messagingSenderId: "266657736727"
    }
    
  const firebaseApp =  firebase.initializeApp(firebaseConfig);  

  module.exports = firebaseApp;