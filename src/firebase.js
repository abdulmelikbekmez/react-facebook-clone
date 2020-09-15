import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSmH5AXE52AuFlo49w1F6WKJwZc1hPRc8",
  authDomain: "facebook-clone-c5b92.firebaseapp.com",
  databaseURL: "https://facebook-clone-c5b92.firebaseio.com",
  projectId: "facebook-clone-c5b92",
  storageBucket: "facebook-clone-c5b92.appspot.com",
  messagingSenderId: "1056862063154",
  appId: "1:1056862063154:web:ac070c7bab3cc37e7aca2b",
  measurementId: "G-53699M21JY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
