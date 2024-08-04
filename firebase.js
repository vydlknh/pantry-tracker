// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn_7ruRzedNBLxhfUuudAwlYjHNji_KrI",
  authDomain: "pantry-tracker-50ae0.firebaseapp.com",
  projectId: "pantry-tracker-50ae0",
  storageBucket: "pantry-tracker-50ae0.appspot.com",
  messagingSenderId: "724869556343",
  appId: "1:724869556343:web:50c88721e0f00ff9cbbe72",
  measurementId: "G-ZV635CHQ7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}