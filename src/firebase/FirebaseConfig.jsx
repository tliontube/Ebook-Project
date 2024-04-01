// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJOHFQbTFTwQBAVh9u_0tX3EFnPAcUjsY",
    authDomain: "ebook-afac7.firebaseapp.com",
    projectId: "ebook-afac7",
    storageBucket: "ebook-afac7.appspot.com",
    messagingSenderId: "1016610044682",
    appId: "1:1016610044682:web:58d10839441f9da49f18f3"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }