import React from "react";
import { Suspense } from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/loader/Loader';
const AppRouter=React.lazy(()=>import('./components/AppRouter'));
const Navbar=React.lazy(()=>import('./components/Navbar'));


function App() {
  const {auth}=useContext(Context);
  const [user,loading,error]=useAuthState(auth);
  return (
  <>
    <BrowserRouter>
      <Suspense>
        <Navbar/>
      </Suspense>
      <Suspense fallback={<Loader/>}>
        <AppRouter/>
      </Suspense>
    </BrowserRouter>
  </>
  );
}

export default App;
