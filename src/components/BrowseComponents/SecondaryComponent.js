import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../secondaryContainer/MovieList';

const SecondaryComponent = () => {
  const movies = useSelector(store => store.movie)
  // console.log("Secondary =",movies)
  return (
    movies.nowPlayingMovies && (
      <div className=' -mt-50 relative z-20'>
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Trending"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Popular"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.nowPlayingMovies}
        />
      </div>
    )
  )
}

export default SecondaryComponent;