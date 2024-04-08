import React from 'react'
import Header from './Header';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './BrowseComponents/MainContainer';
import SecondaryComponent from './BrowseComponents/SecondaryComponent';
import usePopularMoviess from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovie();
  usePopularMoviess();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryComponent />
      {/**
       * MainContainer
       *  -videobackground
       *  -Videotitle
       * SecondaryContainer
       *  -MovieList * n
       *   -cards *n
       */}
    </div>
  )
}

export default Browse