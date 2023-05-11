import { Route, Routes ,Navigate} from "react-router-dom";
import { PublicRoutes,PrivetRoutes } from "../utulity/routes";
import Login from '../components/Login';
import Chat from '../components/Chat';


const AppRouter=()=>{

    
    return(
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/chat'  element={<Chat />} />
        <Route path="*"  element={<Navigate to="/login"/>}/>
    </Routes>
    );
}


export default AppRouter;