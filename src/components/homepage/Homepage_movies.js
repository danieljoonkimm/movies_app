import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HomepageAPI } from './homepage_api'
import { Home } from './Homepage_outline'

export const HomepageMovies = ({ title, fetchURL }) => {
  const {movies} = HomepageAPI(fetchURL)
  const images = `https://image.tmdb.org/t/p/w500/`

  return (
    <div>
      <Home.Title>{title}</Home.Title>
      <Home>
        {movies.map( movie => (
          <Home.Image src={images+movie.poster_path} alt={movie.title} key={movie.id} />
        ))}
      </Home>
    </div>
  )
}