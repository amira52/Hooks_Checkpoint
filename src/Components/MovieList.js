import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, searchText}) => {
    return (
        <div>
           {movies.filter((el) =>el.name.toUpperCase().includes(searchText.toUpperCase())
           )
           .map((el)=>(
           <MovieCard movie = {el}/>))}
        </div>
    )
}

export default MovieList
