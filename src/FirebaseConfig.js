// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAcAZrPf9Jbfa3CPRM_tc_wkstQ7mpYwm8",

  authDomain: "to-do-app-js4.firebaseapp.com",

  projectId: "to-do-app-js4",

  storageBucket: "to-do-app-js4.appspot.com",

  messagingSenderId: "782009284613",

  appId: "1:782009284613:web:c3b261fec4c27200e4046c",

  measurementId: "G-ZN9FPGYMER"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const db = getFirestore(app); 