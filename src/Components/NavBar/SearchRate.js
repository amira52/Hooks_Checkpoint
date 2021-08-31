import React from 'react'
import Rating from "@material-ui/lab/Rating";

const SearchRate = ({setSearchRating, searchRating}) => {
    return (
        <Rating
        name="read-only"
        value={searchRating}
        controlled="true"
        onChange={(event, newValue) => {
        setSearchRating(newValue);
      }}
      style={{ background: "white" }} 
        />
    )
}

export default SearchRate
