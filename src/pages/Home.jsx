import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'; 
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MovieIcon from '@mui/icons-material/Movie';
import {results} from '../../api/movies/movies.json'


export const Home = () => {

    var [movies, setMovies] = useState([])
    var [movie, setMovie] = useState([])
    var [pages,setPages]= useState(0)


   const  url= 'https://api.themoviedb.org/3/genre/movie/list?language=es'
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWMzOWYxYzI4MGU0NDMwYTNjZjNkODljNmE1MjJhNyIsInN1YiI6IjY1ZTc5NmNjNTFmOTlhMDE4NWZiY2U2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7h0ypTGWkeq70iSUvCcFlOkdccEmJPe3Iajn-2FC9lk'
      }
    };
    
    useEffect(() => {
        getMovies();

    }, []);
    
    const getMovies = async () =>{
        const response = await axios.request(url, options);
        setMovies(response.data.genres)
        console.log(response.data.genres)
    }
    //console.log(results)

    // var page =0
    // const getPagesMovies = ()=>{
    //     movies.map((e)=>{
    //         setMovie(...movie, e)
    //         page++
    //     })
    // }    
    // console.log(movie)


  return (
      <>     
        
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"1rem", margin:"0.5rem",}}>              
            {movies.map(e=>(
                <Grid item xs={2} sm={4} md={4} key={e.id}>
                    <Card sx={{ maxWidth: 345, bgcolor:grey[200] }}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                            <MovieIcon/>
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={e.name}
                        subheader={e.release_date}
                    />
                    <CardMedia
                        component="img"
                        height="20"
                        image={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                        alt={e.title}
                    />
                    <CardContent>
                        <Typography variant="body1" color="text.secondary">
                        {e.overview}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    
                    </CardActions>
                
                    </Card>
                </Grid>
            ))
                
            }
        
            </Grid>


 
     

        
    </>
  )
}

  