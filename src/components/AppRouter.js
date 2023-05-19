import React,{ useContext } from "react";
import { Route, Routes ,Navigate,useLocation} from "react-router-dom";
import { Context } from "..";

const Login=React.lazy(()=>import('../components/Login'))
const Chat=React.lazy(()=>import('./Chat/Chat'))


const AppRouter=()=>{
    const location=useLocation();
    const {auth}=useContext(Context);
    
    return(
        auth.currentUser
        ?   <React.Suspense> 
            <Routes location={location} key={location.pathname}>
                <Route path='/login' element={ <Login/> } />
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