import { useEffect } from 'react';
import { url } from '../utils/apis'
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../slices/movieSlice';

const usePopularMoviess = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(url + 'popular?page=1', API_OPTION)
        //console.log(url + 'popular?page=1', API_OPTION)
        const json = await data.json();
        //console.log("json",json.results)
        dispatch(addPopularMovies(json.results))

    }

    useEffect(() => {
        getPopularMovies();
    }, [])
};

export default usePopularMoviess;
