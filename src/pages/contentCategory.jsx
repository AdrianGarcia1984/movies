import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'; 
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MovieIcon from '@mui/icons-material/Movie';
import {servicesCategory} from '../../api/services'
import { useNavigate, useParams } from 'react-router-dom';




export const ContentCategory = () => {
    const idGenre= useParams()
    const [genres, setGenres] = useState([])
    const urlImages = "https://image.tmdb.org/t/p/original/"
    const navigate= useNavigate()

    useEffect(() => {
        setGenres(servicesCategory(idGenre))
    }, [])
    
    const contentHandler=(id)=>{
        navigate("/ContentDetails/"+id)
      }


    return (
        <>              
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"1rem", margin:"0.5rem",}}>              
              {genres.map(e=>(
                  <Grid item xs={2} sm={4} md={4} key={e.id}>
                    <a onClick={()=>contentHandler(e.id)}>
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
                          title={e.title}
                          subheader={e.release_date}
                      />
                      <CardMedia
                          component="img"
                          height="500"
                          image={urlImages+e.poster_path}
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
