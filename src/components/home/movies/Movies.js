import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MoviesLayout } from './Movies_layout'
import { MoviesAPI } from './movies_api'

export const Movies = ({ title, fetchURL, isMain }) => {
  const {movies} = MoviesAPI(fetchURL)
  const images = `https://image.tmdb.org/t/p/w500/`

  return (
    <div>
      <MoviesLayout.Title>{title}</MoviesLayout.Title>
      <MoviesLayout>
        {movies.map( movie => (
          <MoviesLayout.Image src={isMain ? images+movie.poster_path : images+movie.backdrop_path} alt={movie.title} key={movie.id} />
        ))}
      </MoviesLayout>
    </div>
  )
}