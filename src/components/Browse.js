import React from 'react'
import Header from './Header';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './BrowseComponents/MainContainer';
import SecondaryComponent from './BrowseComponents/SecondaryComponent';
import usePopularMoviess from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Gptsearch from './BrowseComponents/Gptsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  
  useNowPlayingMovie();
  usePopularMoviess();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <Gptsearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryComponent />
          </>
        )
      }
    </div>
  )
}

export default Browse