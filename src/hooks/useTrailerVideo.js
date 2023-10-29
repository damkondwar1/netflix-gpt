import { addTrailerVideo } from '../utils/moviesSlice'
import { API_OPTION } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const useTrailerVideo = (movieId)=>{
    const dispatch = useDispatch();
    
        const getVideo = async ()=> {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId +"/videos?language=en-US",API_OPTION)
        const json = await data.json()
        
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length  ? filterData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
      }
    
      useEffect(()=>{
        getVideo();
      },[])
    

}

export default useTrailerVideo;