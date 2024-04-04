import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailorVideo } from '../slices/movieSlice';
import { url } from '../utils/apis';
import { API_OPTION } from '../utils/constant';
const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch(url + '/' + movieId + '/videos?language=en-US', API_OPTION)
        const json = await data.json();
        const filterData = json.results.filter((video) =>
            video.type === 'Trailer'
        )
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailorVideo(trailer))
    }

    useEffect(() => {
        getMovieVideo();
    }, [])


}
export default useMovieTrailor