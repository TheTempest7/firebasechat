import { Route, Routes ,Navigate,useLocation} from "react-router-dom";
import { PublicRoutes,PrivetRoutes } from "../utulity/routes";
import Login from '../components/Login';
import Chat from '../components/Chat';
import { AnimatePresence } from "framer-motion";

const AppRouter=()=>{
    const location=useLocation();
    
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/login' element={<Login/>} />
                <Route path='/chat'  element={<Chat />} />
                <Route path="*"  element={<Navigate to="/login"/>}/>
            </Routes>
        </AnimatePresence>
    );
}


export default AppRouter;