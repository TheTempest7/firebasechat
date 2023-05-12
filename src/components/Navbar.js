import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { AppBar,Toolbar,IconButton,Typography } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Context } from "..";
import { useLocation } from "react-router-dom";



const Navbar=React.memo(()=>{
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {auth}=useContext(Context);
  const currentUser=auth.currentUser;

  const [data,setData]=useState();
  let {pathname}=useLocation();
  const checkAuth=(e)=>{
    if(!data){e.preventDefault()}
  }

useEffect(()=>{
  setData(currentUser);
})


  return(
  <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar variant={'dense'} disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          { pathname==='/login' ?           
              <Button onClick={(e)=>{checkAuth(e)}} variant="outlined" style={{ border: '2px solid',marginRight:'1.5vw' }}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to={data?'/chat':''}
              >
                Chat
              </Button> 
              :  
              <Button  variant="outlined" style={{ border: '2px solid',marginRight:'1.5vw' }}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to={'/login'}
                > Login
              </Button>
              }
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'flex-end' }}> 
          { pathname==='/login' ?           
              <Button onClick={(e)=>{checkAuth(e)}} variant="outlined" style={{ border: '2px solid',marginRight:'1.5vw' }}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to={data?'/chat':''}
              >
                Chat
              </Button> 
              :  
              <Button  variant="outlined" style={{ border: '2px solid',marginRight:'1.5vw' }}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to={'/login'}
                > Login
              </Button>
              }
          </Box>
        </Toolbar>
      </Container>
  </AppBar>

)
}) 
  
  export default Navbar;
  