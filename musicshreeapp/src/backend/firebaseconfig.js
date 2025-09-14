// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACX0tizp1YZjHST8mztg6CtlGYQId09wE",
  authDomain: "musicshreeapp-dcd4c.firebaseapp.com",
  projectId: "musicshreeapp-dcd4c",
  storageBucket: "musicshreeapp-dcd4c.firebasestorage.app",
  messagingSenderId: "919612039322",
  appId: "1:919612039322:web:2380c5e6af24670d453f23"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);