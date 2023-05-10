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



function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userData=useContext(Context);
  const currentUser=userData.auth.currentUser;
  const [data,setData]=useState(currentUser);

  let {pathname}=useLocation();
  console.log(currentUser,userData);
 
  console.log(pathname);

useEffect(()=>{
  console.log(currentUser);
},[data])


  return(
  <>
  <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar variant={'dense'} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem >
                  <Typography textAlign="center">reload</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'flex-end' }}> 
          { pathname==='/login' ?           
              <Button  variant="outlined" style={{ border: '2px solid',marginRight:'1.5vw' }}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to={'/chat'}
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
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
            >
                <MenuItem>
                  <Typography textAlign="center">What</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div>
    <h2>Navbar</h2>
    </div>
  </>
)
}
  
  export default Navbar;
  