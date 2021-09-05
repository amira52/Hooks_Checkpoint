import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import { moviesData } from './Constant/Data';
import SearchAppBar from './Components/NavBar/NavBar';
import SimpleModal from './Components/Add';
import { Route, Switch } from 'react-router-dom';
import Description from './Pages/Description';



function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchText, setSearchText] = useState("")
  const addMovie =(movie) => setMovies(movies.concat(movie));
    return (
    <div className="App">
      <SearchAppBar setSearchText ={setSearchText} />
      <Switch>
        <Route exact path="/">
          <div>
          <SimpleModal addMovie={addMovie}/>
          <MovieList movies={movies} 
          searchText={searchText}/>   
          </div>
        </Route> 
      <Route path="/description" component={Description}/>
      <Route path="/*" render={()=> <h1>Not found</h1>}/>
      </Switch>   
      </div>     
  );
  }
export default App;
