import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import { moviesData } from './Constant/Data';
import SearchAppBar from './Components/NavBar/NavBar';
import MovieCard from './Components/MovieCard';
import SimpleModal from './Components/Add';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchText, setSearchText] = useState("")
  const addMovie =(movie) => setMovies(movie.concat(movie));
  return (
    <div className="App">
      <SearchAppBar setSearchText ={setSearchText} />
      <SimpleModal addMovie={addMovie}/>
      <MovieList movies={movies} searchText={searchText}/>
    </div>
  );
  }
export default App;
