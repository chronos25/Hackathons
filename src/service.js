import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  // query,
  // orderBy,
  // limit,
  // onSnapshot,
  // setDoc,
  // updateDoc,
  // doc,
  // serverTimestamp,
} from 'firebase/firestore';
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// // } from 'firebase/storage';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import { getPerformance } from 'firebase/performance';
import firebaseConfig from "./firebase-config";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/*
const db = firebase.ref("/challenges");
const dbEmployee = firebase.ref("/employee");
*/
// class HackathonService {

//   constructor(){

//   }

async function saveMessage(data) {
    // Add a new message entry to the Firebase database.
    console.log(1212);
    try {
      //await addDoc(collection(getFirestore(), 'challenges'), 
      // await db.collection('Challenges').add(
      // {
      //   title: data.title,
      //   description: data.description,
      //   timestamp: serverTimestamp()
      // });
      const docRef = await addDoc(collection(db, "testC"), {
        title: data.title,
        description: data.description
      });
      console.log("Document written with ID: ", docRef.id);
    }
    catch(error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

export default saveMessage;