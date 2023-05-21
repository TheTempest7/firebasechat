import { createContext } from 'react';
import './index.css';
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


export const Context= createContext(null);

export const provider=new GoogleAuthProvider();
export const firebaseConfig = {
        apiKey: "AIzaSyCdszaiotFawueOymRkX_VlqUWQGmAO_6A",
        authDomain: "chat-e0008.firebaseapp.com",
        databaseURL:'https://chat-e0008-default-rtdb.europe-west1.firebasedatabase.app/',
        projectId: "chat-e0008",
        storageBucket: "chat-e0008.appspot.com",
        messagingSenderId: "1069152567650",
        appId: "1:1069152567650:web:d7c5878474ea34c2a6ec3b",
        measurementId: "G-7PEWGZMX64"
    };
    
    export const firebaseApp=initializeApp(firebaseConfig);
    export const auth=getAuth(firebaseApp);
    export const db=getFirestore(firebaseApp);
    
    