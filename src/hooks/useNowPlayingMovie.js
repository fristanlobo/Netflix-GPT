import { useEffect } from 'react';
import { url } from '../utils/apis'
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../slices/movieSlice';

const useNowPlayingMovie = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = async () => {
        const data = await fetch(url + 'now_playing?page=1', API_OPTION)
        const json = await data.json();
        // console.log("json",json.results)
        dispatch(addNowPlayingMovie(json.results))
        
    }

    useEffect(() => {
        nowPlayingMovies();
    }, [])
};

export default useNowPlayingMovie;
