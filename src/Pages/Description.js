import React from 'react'
import MovieCard from '../Components/MovieCard'

const Description = ({location:{state:{movie},
},
history,
}) => {
    return (
        <div>
           <h1>Description page</h1> 
           <MovieCard movie={movie}/>
           <button onClick={()=>history.goBack()}>Go Back</button>
        </div>
    )
}

export default Description
