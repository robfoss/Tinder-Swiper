// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNd3dHCARTbgbhtSjH7uTvtx9g2Vn3684",
    authDomain: "tinder-clone-df4d7.firebaseapp.com",
    projectId: "tinder-clone-df4d7",
    storageBucket: "tinder-clone-df4d7.appspot.com",
    messagingSenderId: "569280070102",
    appId: "1:569280070102:web:a39ad3233f8c35d39fa477",
    measurementId: "G-TEK7J5W6PW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;