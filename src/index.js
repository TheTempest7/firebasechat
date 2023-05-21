import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore';
import 'firebase/auth';
import {provider,firebaseApp,auth,db} from './indexData';
import { Context } from './indexData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{firebaseApp,auth,provider,db}}>
    <App />
  </Context.Provider>
);

reportWebVitals();
