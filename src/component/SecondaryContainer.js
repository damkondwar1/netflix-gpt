import { useSelector } from "react-redux"
import MovieList from "./MovieList"



const SecondaryContainer = () => {
  
  const movies = useSelector((store)=> store.movies);
  console.log(movies)

  return (
    
    <div className=" bg-black">
      <div className="-mt-52 pl-22 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.addUpcomingMovies}/>
      <MovieList title={"Popular"} movies={movies.addPopularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.addTopRatedMovies}/>

      </div>
    </div>
  )
}


export default SecondaryContainer
 
