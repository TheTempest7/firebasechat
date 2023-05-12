import React,{lazy,Suspense, useContext } from "react";
import { Route, Routes ,Navigate,useLocation} from "react-router-dom";
import { PublicRoutes,PrivetRoutes } from "../utulity/routes";
// import Login from '../components/Login';
// import Chat from '../components/Chat';
import { AnimatePresence } from "framer-motion";
import { Context } from "..";
// import Loader from "./loader/Loader";

const Login=React.lazy(()=>import('../components/Login'))
const Chat=React.lazy(()=>import('../components/Chat'))
const Loader=React.lazy(()=>import('./loader/Loader'))


const AppRouter=()=>{
    const location=useLocation();
    const {auth}=useContext(Context);
    
    return(
        auth.currentUser
        ?
            <Routes location={location} key={location.pathname}>
                <Route path='/login' element={<AnimatePresence><Suspense fallback={<Loader/>}><Login/></Suspense></AnimatePresence> } />
                <Route path='/chat'  element={<AnimatePresence><Suspense ><Chat /></Suspense></AnimatePresence> } />
                <Route path="*"  element={<Navigate to="/login"/>}/>
            </Routes>
        :
        <Routes location={location} key={location.pathname}>
            <Route path='/login' element={<Suspense fallback={<Loader/>}><Login/></Suspense>} />
            <Route path="*"  element={<Navigate to="/login"/>}/>
        </Routes>
    );
}


export default AppRouter;