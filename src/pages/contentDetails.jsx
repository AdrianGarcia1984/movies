import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {servicesMovie} from '../../api/services'
import { Container } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { Box, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const inicialState={
    id: 0,
    email: "",
    login:false,
    first_name: "",
    last_name: "",
    avatar: "",
    password: "",
    movies :[]

}

export const ContentDetails = () => {
    const idMovie= useParams()
    const [movie, setMovie] = useState(inicialState)
    const urlImages = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        setMovie(servicesMovie(idMovie))
    }, [])
    
console.log(movie)
  return (
    <>
    <Container
    src={urlImages+movie.backdrop_path}    
    sx={{bgcolor: blue[900], display: "flex", margin:1}}
    
    >
    <Box
            component="img"
           
            src={urlImages+movie.poster_path}
            alt={movie.title}
            sx={{ maxHeight: {xs:"50vh", md:"75vh",lg:"100vh", xl:"130vh"},
                maxWidth: {xs:"50vh", md:"75vh",lg:"100vh", xl:"130vh"},
                alignItems: "center",
                padding: 1,
                borderRadius: 2,
                boxShadow: 3
            }}
          />
    <Box
        sx={{
            //maxWidth: {xs:"50vh", md:"75vh",lg:"100vh", xl:"auto"},
            maxHeight: {xs:"50vh", md:"75vh",lg:"100vh", xl:"130vh"},
            borderRadius: 1,
            bgcolor:grey[200], display: "block",
            padding: 1,
            margin:"0.5rem",
            boxShadow: 3
        }}
        >
          <Typography color="text.secondary" 
          sx={{padding:1, 
          fontSize: 'h6.fontSize',
          fontWeight: 'bold'
          
          }} >
          <h1>{movie.title}</h1>
        </Typography>
        <Typography color="text.secondary" sx={{padding:1 }}>
          <h3> titulo original: {movie.original_title}</h3>
        </Typography>
        <Typography color="text.secondary" sx={{padding:1 }}>
        <h3> fecha de lanzamiento: {movie.release_date}</h3>
        </Typography>
       {movie.overview === ""? <Typography variant="body1" color="text.secondary">
            sinapsis: espectacular pelicula debes verla
        </Typography>:
       
       <Typography variant="body1" color="text.secondary">
            sinapsis: {movie.overview}
        </Typography>}
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
         </IconButton>
        </Box>
    </Container>
    </>
  )
}
