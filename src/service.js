import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBkJD8mBUs8SyXhSGM5WuS89C0rXOhtggI",
    authDomain: "hackathon-7f144.firebaseapp.com",
    projectId: "hackathon-7f144",
    storageBucket: "hackathon-7f144.appspot.com",
    messagingSenderId: "1026677575947",
    appId: "1:1026677575947:web:e17bfafd3885993204d20e",
    measurementId: "G-5MXWN7LVJ0"
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;