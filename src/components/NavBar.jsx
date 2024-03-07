import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { blueGrey } from '@mui/material/colors';
import { useUser } from "../context/userContext";
import  Link  from '@mui/material/Link';


export const NavBar = () => {

    const {user, exit} = useUser()



  return (
    <Box sx={{ flexGrow: 1 ,}}>
    <AppBar position="static" sx={{bgcolor: blueGrey[900]}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 4 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {user.first_name}
        </Typography>
        
        {user.id!=0 &&<>
            <Button href="/" color="inherit" underline="none">MOVIES</Button>
            <Button color="inherit" onClick={() => exit()}>logout</Button>
        </>
        }
      </Toolbar>
    </AppBar>
  </Box>
  )
}
