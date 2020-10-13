import React from 'react'
import styled from 'styled-components'

const HomepageMoviesListContainer = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 300px;
  min-height: 250px;
  transition: transform 450ms;
  margin-right: 10px;

    &:hover {
      transform: scale(1.08);
    }
  }

`

export const HomepageMoviesList = ({ movie, images }) => {
  return (
      <HomepageMoviesListContainer src={images+movie.poster_path} alt={movie.title} key={movie.id} />
  )
}