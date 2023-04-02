// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxDRru0LZ0utpX_1Op_qA7DOdPkvFdfpA",
  authDomain: "rn-instagram-clone-live-15ccd.firebaseapp.com",
  projectId: "rn-instagram-clone-live-15ccd",
  storageBucket: "rn-instagram-clone-live-15ccd.appspot.com",
  messagingSenderId: "519303958135",
  appId: "1:519303958135:web:cb80db17fe91be88e50072"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
!firebase.apps.length ? 
firebase.initializeApp(firebaseConfig) :
firebase.app()

export default firebase