import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HomepageMoviesList } from './Homepage_movies_list'
import axios from '../theme/axios'

const HomepageMoviesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
`

export const HomepageMovies = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([])
  const images = `https://image.tmdb.org/t/p/w500/`

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await axios.get(fetchURL)
      setMovies(...movies, data.results)
    }
    fetchData()
  }, [fetchURL])
  console.log(movies)
  return (
    <div>
      <h2>{title}</h2>
      {movies.map( movie => (
        <HomepageMoviesList movie={movie} title={title} images={images}/>
      ))}
    </div>
  )
}