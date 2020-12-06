import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAtF-Q9p3KHbU7KT2cVNgeEySIUaL9lSeg",
  authDomain: "virtues-4408e.firebaseapp.com",
  databaseURL: "https://virtues-4408e.firebaseio.com",
  projectId: "virtues-4408e",
  storageBucket: "virtues-4408e.appspot.com",
  messagingSenderId: "116461017915",
  appId: "1:116461017915:web:5ac0d569ed410fe1c7b51e",
  measurementId: "G-SB9BDNSKNM"
});

const db = firebaseApp.firestore();
const storage = firebase.storage();


export default db;