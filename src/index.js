import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore';
import 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,onAuthStateChanged,signOut,GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const provider=new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyCdszaiotFawueOymRkX_VlqUWQGmAO_6A",
  authDomain: "chat-e0008.firebaseapp.com",
  databaseURL:'https://chat-e0008-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: "chat-e0008",
  storageBucket: "chat-e0008.appspot.com",
  messagingSenderId: "1069152567650",
  appId: "1:1069152567650:web:d7c5878474ea34c2a6ec3b",
  measurementId: "G-7PEWGZMX64"
};

const firebaseApp=initializeApp(firebaseConfig);
const auth=getAuth(firebaseApp);
const db=getFirestore(firebaseApp);





export const Context= createContext(null);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{firebaseApp,auth,provider,db}}>
    <App />
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
