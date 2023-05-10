import {LOGIN_ROUTES,CHAT_ROUTES} from './consts';
import Login from '../components/Login';
import Chat from '../components/Chat';

export const PublicRoutes=[
    {
        path:LOGIN_ROUTES,
        component:<Login/>
    }
]


export const PrivetRoutes=[
    {
        path:CHAT_ROUTES,
        component:<Chat/>
    }
]