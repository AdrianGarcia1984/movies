import React, { useCallback, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MovieIcon from '@mui/icons-material/Movie';
import { useUser } from '../context/userContext';
import {servicesGenre} from '../../api/services'
import { useNavigate } from 'react-router-dom';



export const Home = () => {
    const {user}= useUser()
    const navigate = useNavigate()
    var [genres, setGenres] = useState([])
    var [movie, setMovie] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState("");
    


   const  url= 'https://api.themoviedb.org/3/genre/movie/list?language=es'
   const urlImages = "https://image.tmdb.org/t/p/original/"
   const urlimg = "https://source.unsplash.com/random?"
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWMzOWYxYzI4MGU0NDMwYTNjZjNkODljNmE1MjJhNyIsInN1YiI6IjY1ZTc5NmNjNTFmOTlhMDE4NWZiY2U2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7h0ypTGWkeq70iSUvCcFlOkdccEmJPe3Iajn-2FC9lk'
      }
    };
    
    useEffect(() => {
        getGenres();

    }, []);
    
    const getGenres = useCallback( async () =>{
        //const responseImg = await axios.request(urlImages, options);
        const responseData = await servicesGenre(page)
        setGenres(responseData)
        
    },[])
    //missing pagination
    const onchangePage = (page) => {
        servicesGenre(page);
      }

      const contentHandler=(id)=>{
        navigate("/contentCategory/"+id)
      }


  return (
      <>     
        
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"1rem", margin:"0.5rem",}}>              
            {genres.map(e=>(
                <Grid item xs={2} sm={4} md={4} key={e.id}>
                    <a onClick={()=>contentHandler(e.id)}>
                    <Card sx={{ maxWidth: 345, bgcolor:grey[200] }} >
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
                        height="500"
                        image={`https://source.unsplash.com/random?${e.name}`}
                        alt={e.title}
                    />
                    <CardContent>
                        <Typography variant="body1" color="text.secondary">
                        {e.overview}
                        </Typography>
                    </CardContent>
                    {/* <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    
                    </CardActions> */}
                
                    </Card>
                    </a>
                </Grid>
            ))
                
            }
        
            </Grid>


 
     

        
    </>
  )
}

  