import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import { moviesData } from './Constant/Data';
import SearchAppBar from './Components/NavBar/NavBar';
import SimpleModal from './Components/Add';
import SearchRate from './Components/NavBar/SearchRate';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchText, setSearchText] = useState("")
  const addMovie =(movie) => setMovies(movies.concat(movie));
  const [searchRating, setSearchRating] = useState(0);
  return (
    <div className="App">
      <SearchAppBar setSearchText ={setSearchText} />
      <SearchRate setSearchRating ={setSearchRating}/>
      <SimpleModal addMovie={addMovie}/>
      <MovieList movies={movies} 
                 searchText={searchText} 
                 searchRating={searchRating}/>
    </div>
  );
  }
export default App;
