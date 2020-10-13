import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HomepageMoviesList } from './Homepage_movies_list'
import axios from '../theme/axios'
import { HomepageAPI } from './homepage_api'

const HomepageMoviesContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

export const HomepageMovies = ({ title, fetchURL }) => {
  const {movies} = HomepageAPI(fetchURL)
  const images = `https://image.tmdb.org/t/p/w500/`

  // const [movies, setMovies] = useState([])
  // const images = `https://image.tmdb.org/t/p/w500/`

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const {data} = await axios.get(fetchURL)
  //     setMovies(...movies, data.results)
  //   }
  //   fetchData()
  // }, [fetchURL])
  
  return (
    <div>
      <h2 style={{ color: 'white' }}>{title}</h2>

      <HomepageMoviesContainer>
        {movies.map( movie => (
          <HomepageMoviesList movie={movie} title={title} images={images}/>
        ))}
      </HomepageMoviesContainer>
    </div>
  )
}