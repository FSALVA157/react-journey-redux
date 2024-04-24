// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-H_9wgEk4idFIJ6Yo3AhJLYOhSpTLAr4",
  authDomain: "react-cursos-f23ba.firebaseapp.com",
  projectId: "react-cursos-f23ba",
  storageBucket: "react-cursos-f23ba.appspot.com",
  messagingSenderId: "791606695681",
  appId: "1:791606695681:web:74b830df48e61f1245ed00"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestoreDB = getFirestore(firebaseApp)