import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrAH1iTme1lXSIO1VMHDk5rMqrGNBblpk",
  authDomain: "facebook-messenger-clone-5e495.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-5e495.firebaseio.com",
  projectId: "facebook-messenger-clone-5e495",
  storageBucket: "facebook-messenger-clone-5e495.appspot.com",
  messagingSenderId: "14671051956",
  appId: "1:14671051956:web:690d5c6467bc1f442bebe1",
  measurementId: "G-7P0DPRQN1D",
});
const db = firebaseApp.firestore();
export default db;
