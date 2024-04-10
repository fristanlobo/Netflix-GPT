
import { useEffect } from 'react';
import { url } from '../utils/apis'
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../slices/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch(url + 'upcoming?page=1', API_OPTION)
        //console.log(url + 'upcoming?page=1', API_OPTION)
        const json = await data.json();
        //console.log("json",json.results)
        dispatch(addUpcomingMovies(json.results))

    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])
};

export default useUpcomingMovies;
