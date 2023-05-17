import React, { createContext } from "react";
import { Button, Container ,Grid,Box} from "@mui/material";
import { useContext } from "react";
import { Context } from "../index";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
export const loginContext=createContext(null);

const Login=()=>{
  const dataUser=useContext(Context);
  const navigate=useNavigate();
  const auth=dataUser.auth;


  const provider=dataUser.provider;
  const login= async()=>{
    signInWithPopup(auth,provider)
    .then(()=>{navigate('/chat')})
  }

  return (
  <motion.div className='page'  
    initial={{opacity:0,translateX:'-400px',transition:{duration:1}}} 
    animate={{opacity:1,translateX:'0px',transition:{duration:1}}} 
    exit={{opacity:0,translateX:'400px',transition:{duration:1}}}>
    <Container>
        <Grid container={true} style={{display:'flex',
          justifyContent:'center'}} >
            <Grid container={true} style={{width:400,background:'lightgray',marginTop:'10vh',borderRadius:'20px'}}
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
  
