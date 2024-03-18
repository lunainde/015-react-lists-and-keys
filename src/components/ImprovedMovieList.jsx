import { useState } from "react";
import moviesData from "../movies-data.json"
// import MovieCard from "./MovieCard"; => replaced by IMCard
//EXTRACTING CONDITIONS
import ImprovedMovieCard from "./ImprovedMovieCard"

import React from 'react';


function ImprovedMovieList() {
    const [movies, setMovies] = useState(moviesData);
    const [showMovies, setShowMovies] = useState(true);
   
    const deleteMovie = movieId => {
      const filteredMovies = movies.filter(movie => {
        return movie._id !== movieId;
      });
      setMovies(filteredMovies);
    };
   
    const toggleShowMovies = () => {
      setShowMovies(!showMovies);
    };
   
    return (
      <div>
        <h2>Improved Movie List</h2>
   
        <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>
   
        {showMovies &&
          movies.map(movie => {
            return (
              <ImprovedMovieCard 
                key={movie._id} 
                movie={movie} 
                clickToDelete={deleteMovie} 
              />);
          })}
      </div>
    );
  }
export default ImprovedMovieList;

//=======REPLACED BY (EXTRACTING CONDITION LESSON ▲)=================

// function ImprovedMovieCard(props) {
//   const { movie, clickToDelete } = props;

//   function generateScoreLabel(score) {
//     if (score > 9) {
//       return <span className="green">9+</span>;
//     } else if (score < 7) {
//       return <span className="red">{score}</span>;
//     } else {
//       return <span className="black">{score}</span>;
//     }
//   }

//   return (
//     <div className="MovieCard">
//       <h3>{movie.title}</h3>
//       <p>Director: {movie.director}</p>
//       <p>IMDB Rating: {generateScoreLabel(movie.IMDBRating)}</p>

//       {movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars!</p>}

//       <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
//         Delete 
//       </button>
//     </div>
//   );
// }

// export default ImprovedMovieCard;


// import React from 'react'

// function ImprovedMovieList() {
//     //initiate useState & initial value
//     const [movies, setMovies] = useState(moviesData);
//     //declare new state var colling showMovie
//     const [showMovies, setShowMovies] = useState(true)
  
//     const deleteMovie = movieId => {
//         const filteredMovies = movies.filter(movie => {
//             return movie._id !== movieId;
//         })
//         setMovies(filteredMovies);
//     };

//     const toggleShowMovies = () => {
//         setShowMovies(!showMovies);
//     };
//     return (
//     <div>
//         <h2>Improved Movie List</h2>

//         <button onClick={toggleShowMovies}>{showMovies? 'Hide' : 'Show'}</button>
    
//         {showMovies && movies.map(movie => {
//             return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
//         })}
//     </div>
//   );
// }