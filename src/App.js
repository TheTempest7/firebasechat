
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { useContext } from 'react';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/loader/Loader';

function App() {
  const {auth}=useContext(Context);
  const [user,loading,error]=useAuthState(auth);
  console.log(loading);
  if(loading){
    return <Loader/>
  }
  return (<>
  <BrowserRouter>
    <Navbar/>
    <AppRouter/>
  </BrowserRouter>
  </>
  );
}

export default App;
