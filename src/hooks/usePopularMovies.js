
import { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {  addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies =()=>{

    const dispatch = useDispatch();

    const getpopularmovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION);
    const json = await data.json();
    console.log(json)
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
   getpopularmovies();

  },[])

}

export default usePopularMovies;