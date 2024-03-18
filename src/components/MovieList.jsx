import React from 'react';

// LIST => IMPORT useSTATE & JSON List
import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

function MovieList() {
  // Declare a state variable "movies"
  // set array movies-data.json as initial state
  const [movies, setMovies] = useState(moviesData);
 // DELETE Button
  const deleteMovie = movieId => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId;
    });
 
    setMovies(filteredMovies);
  };

    return (
        <div>
          <h2>Movie List</h2>
          {movies.map(movie => {
            return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
          })}
        </div>
    );
}

export default MovieList;