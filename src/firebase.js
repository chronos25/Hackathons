import * as firebase from "firebase";
import "firebase/database";
    //uuid = require('uuid');

let firebaseConfig = {
    apiKey: "AIzaSyBkJD8mBUs8SyXhSGM5WuS89C0rXOhtggI",
    authDomain: "hackathon-7f144.firebaseapp.com",
    projectId: "hackathon-7f144",
    storageBucket: "hackathon-7f144.appspot.com",
    messagingSenderId: "1026677575947",
    appId: "1:1026677575947:web:e17bfafd3885993204d20e",
    measurementId: "G-5MXWN7LVJ0"
  };

  firebase.initializeApp(config);

  export default firebase.database();
