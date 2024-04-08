import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

//The values are not same as I used in the app for security purposes.
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8sJ_1ZtzkZn7MCDEvoJh5YsWdbglrYwU",
  authDomain: "socialmediaapp1606.firebaseapp.com",
  projectId: "socialmediaapp1606",
  storageBucket: "socialmediaapp1606.appspot.com",
  messagingSenderId: "365951333286",
  appId: "1:365951333286:web:d4ede0856df09d1fc41567",
  measurementId: "G-8WH7VJBRX8",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
