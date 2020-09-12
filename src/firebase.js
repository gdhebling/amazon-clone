import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD6LRrs0Rk4XQLfwSsrZVdzRxvN_6s9qpQ",
    authDomain: "clone-3665f.firebaseapp.com",
    databaseURL: "https://clone-3665f.firebaseio.com",
    projectId: "clone-3665f",
    storageBucket: "clone-3665f.appspot.com",
    messagingSenderId: "404486006121",
    appId: "1:404486006121:web:c998ea7974e1e167e249f8",
    measurementId: "G-QVCTBBK42Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };