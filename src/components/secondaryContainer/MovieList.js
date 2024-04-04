import React from 'react';
//import MovieCard from './MovieCard.js';

const MovieList = ({ title, movies }) => {
  console.log("movies",movies)
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
export default MovieList;