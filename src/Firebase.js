import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8FX2R0Mq1HEQkD9JTScN9cOFpi8rXbPI",
    authDomain: "amzazon-clone-1.firebaseapp.com",
    projectId: "amzazon-clone-1",
    storageBucket: "amzazon-clone-1.appspot.com",
    messagingSenderId: "516082229076",
    appId: "1:516082229076:web:6d9dcfff4ede54d241b2c1",
    measurementId: "G-FR56N7T9ZQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };