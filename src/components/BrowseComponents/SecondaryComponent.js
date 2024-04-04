import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../secondaryContainer/MovieList';

const SecondaryComponent = () => {
  const movies= useSelector(store=>store.movie)
  return (
    <div>
      <MovieList 
        title={"Now Playing"}
        movies={movies.nowPlayingMovies}
      />
    </div>
  )
}

export default SecondaryComponent;