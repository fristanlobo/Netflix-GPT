import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from '../mainContainer/VideoBackground';
import VideoTitle from '../mainContainer/VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store => store.movie.nowPlayingMovies);
    if (!movies) return; // this is known as early return

    const mainMovie = movies[1];
    //console.log('>', mainMovie)

    const { original_title, overview, id } = mainMovie;
    return (
        <div>

            <VideoTitle
                title={original_title}
                description={overview}
            />
            <VideoBackground
                movieId={id}
            />
        </div>
    )
}

export default MainContainer