import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA02496j8eqW0L5TS1TYznJr1LMHM_9m8c",
    authDomain: "net-ninja-marioplan-bea0e.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-bea0e.firebaseio.com",
    projectId: "net-ninja-marioplan-bea0e",
    storageBucket: "",
    messagingSenderId: "862550842669",
    appId: "1:862550842669:web:bb2b1ab17fd1208d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()


  export default firebase;