import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA1PEJX4qDI7_rbh2HjCj462Q1wmUsLImM",
    authDomain: "meuapp-3a84a.firebaseapp.com",
    databaseURL: "https://meuapp-3a84a-default-rtdb.firebaseio.com",
    projectId: "meuapp-3a84a",
    storageBucket: "meuapp-3a84a.appspot.com",
    messagingSenderId: "17092658294",
    appId: "1:17092658294:web:5aaeee7ebd8b0be9da8b57",
    measurementId: "G-6JB7DN3QNH"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
}

export default firebase;