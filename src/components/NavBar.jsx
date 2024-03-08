import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { blueGrey } from '@mui/material/colors';
import {useUser} from '../context/userContext'
import Image from 'mui-image';



export const NavBar = () => {

    const {user, exit} = useUser()
    console.log(user)

  return (
    <Box sx={{ flexGrow: 1 ,}}>
    <AppBar position="static" sx={{bgcolor: blueGrey[900]}}>
      <Toolbar>
      {user.login && <>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 4 }}
        >
        <Image src={user.avatar} sx={{borderRadius: 10, maxWidth:"35px",}}/>        
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Bienvenido: {user.first_name}
        </Typography>
            <Button href="/" color="inherit" underline="none">movies</Button>
            <Button color="inherit" onClick={() => exit()} href='/auth'>logout</Button>
        </>
        }
      </Toolbar>
    </AppBar>
  </Box>
  )
}
