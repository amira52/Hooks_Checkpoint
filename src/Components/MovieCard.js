import React from 'react'
import './MovieCard.css' 
import { Rating } from '@material-ui/lab';

import Box from '@material-ui/core/Box';
const MovieCard = ({movie}) => {
    return (
        <div>
    <div className="movie_card" id="bright">
    <div className="info_section">
      <div className="movie_header">
        <img className="locandina" src={movie.image} />
        <h1>{movie.name}</h1>
        <h4>{movie.date}</h4>
        <p className="type">{movie.type}</p>
      </div>
      <div className="movie_desc">
        <p className="text">
          {movie.description} 
        </p>
        <Box component="fieldset" mb={3} borderColor="transparent">
        
        <Rating name="read-only" value={movie.rating} readOnly />
      </Box>
      </div>
    </div>
    <div className="blur_back bright_back" />
  </div>
</div>

)}

export default MovieCard
