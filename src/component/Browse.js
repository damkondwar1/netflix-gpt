
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies()
  
  return (
    <>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
       
    </>
  )
}

export default Browse

// main container
   //video background
   //video titles

//secondary container
  // movie list
  // cards 
