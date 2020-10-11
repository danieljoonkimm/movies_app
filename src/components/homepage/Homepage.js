import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HomepageHeader, HomepageMovies} from './index'
import { MOVIES_API } from '../theme/API_keys'
import Axios from 'axios'

const HomepageContainer = styled.div`
  background-color: #1c1c1c;
`

export const Homepage = () => {
  const [movies, setMovies] = useState({})
  useEffect(() => {
    const getMovies = async () => {
      try {
        let {data} = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIES_API}&language=en-US&page=1`)
        setMovies(data)
      } catch(e) {
        console.log(e, 'error')
      }
    }
    getMovies()
  }, [])

  return (
    <HomepageContainer>
      <HomepageHeader />
      <HomepageMovies movies={movies}/>
    </HomepageContainer>
  )
}