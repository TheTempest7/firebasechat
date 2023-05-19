import { Link } from "react-router-dom";
import { AppBar,Toolbar } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { Context } from "../..";
import { useLocation } from "react-router-dom";
import {styles} from './styles';


const Navbar=React.memo(()=>{

  const {auth}=useContext(Context);
  const currentUser=auth.currentUser;

  let {pathname}=useLocation();
  
  const checkAuth=(e)=>{
    if(!currentUser){e.preventDefault()}
  }



  return(
  <AppBar sx={styles.AppBar} >
        <Toolbar variant={'regular'} disableGutters={true}>
          <Box sx={styles.fatherNavButtons}> 
            { pathname==='/login' ?           
              <Button   sx={styles.btn} onClick={(e)=>{checkAuth(e)}} 
                component={Link} to={'/chat'}>
                Chat
              </Button> 
              :  
              <Button  sx={styles.btn} 
                component={Link} to={'/login'}> 
                Login
              </Button>
              }
          </Box>
        </Toolbar>
  </AppBar>

)
}) 
  
  export default Navbar;
  