import React, { createContext } from "react";
import { Button, Container ,Grid,Box} from "@mui/material";
import { useContext,useEffect,useState } from "react";
import { Context } from "../index";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { motion } from "framer-motion";
export const loginContext=createContext(null);

const Login=()=>{
  const dataUser=useContext(Context);
  const navigate=useNavigate();
  const[treshold,setTreshold]=useState(null);
  // const user=dataUser.auth.currentUser;
  const auth=dataUser.auth;
  const [user,loading,error]=useAuthState(auth);

  const provider=dataUser.provider;
  const login= async()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{setTreshold(result.user)})
    .then(()=>{console.log('working');})
  }
  const redirect=()=>{
    if(treshold){
      navigate('/chat');
    }
  }

  useEffect(()=>{
    redirect();
  },[treshold])
    return (
    <motion.div className='page' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:1}}}>Login
    <Container>
        <Grid container={true} style={{display:'flex',
          justifyContent:'center'}} >
            <Grid container={true} style={{width:400,background:'lightgray'}}
            alignItems={'center'} direction={'column'}>
              <Box p={5}>
                <Button onClick={login}  variant={'outlined'}>
                  Войти с помощью GOOGLE
                </Button>
              </Box>
            </Grid>
        </Grid>
    </Container>
    </motion.div>
    )
  }
  
  export default Login;
   