import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './BrowseComponents/MainContainer';
import SecondaryComponent from './BrowseComponents/SecondaryComponent';

const Browse = () => {
  useNowPlayingMovie();
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