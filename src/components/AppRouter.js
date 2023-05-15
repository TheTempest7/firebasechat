import React,{ useContext } from "react";
import { Route, Routes ,Navigate,useLocation} from "react-router-dom";
import { PublicRoutes,PrivetRoutes } from "../utulity/routes";
// import Login from '../components/Login';
// import Chat from '../components/Chat';
import { AnimatePresence } from "framer-motion";
import { Context } from "..";
// import Loader from "./loader/Loader";
import Loader from "./loader/Loader";

const Login=React.lazy(()=>import('../components/Login'))
const Chat=React.lazy(()=>import('../components/Chat'))


const AppRouter=()=>{
    const location=useLocation();
    const {auth}=useContext(Context);
    
    return(
        auth.currentUser
        ?   <React.Suspense> 
            <Routes location={location} key={location.pathname}>
                <Route path='/login' element={<Login/> } />
                <Route path='/chat'  element={<Chat />} />
                <Route path="*"  element={<Navigate to="/login"/>}/>
            </Routes>
            </React.Suspense>
        :
        <React.Suspense>
        <Routes location={location} key={location.pathname}>
            <Route path='/login' element={<Login/>} />
            <Route path="*"  element={<Navigate to="/login"/>}/>
        </Routes>
        </React.Suspense>
    );
}


export default AppRouter;