import React, { createContext } from "react";
import { Button, Container ,Grid,Box} from "@mui/material";
import { useContext } from "react";
import { Context } from "../../indexData";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import {styles} from './styles';

export const loginContext=createContext(null);

const Login=()=>{
  const {auth,provider}=useContext(Context);
  const navigate=useNavigate();

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
        <Grid container={true}
          style={styles.outerContainer} >
            <Grid container={true} 
            style={styles.innerContainer}
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
  
