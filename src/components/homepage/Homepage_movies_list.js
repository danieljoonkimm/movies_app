import React from 'react'
import styled from 'styled-components'

const HomepageMoviesListContainer = styled.div`
  flex: 0 0 auto;
  position: relative;
  padding: 5px;

  div {
    font-weight: bold;
    text-transform: uppercase;
    padding: 35% 5px 0px;
    height: 100%;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    background: rgba(30, 30, 30, 0.72);

    transition: opacity .2s, visibility .2s;
  }

  img {
    max-width: 100%;
    height: 350px;
    width: auto;
  }

  &:hover {

    div {
      padding: 35% 5px 0px;
      visibility: visible;
      opacity: 1;
    }
  }
`

export const HomepageMoviesList = ({ movie, key }) => {
  let images = `https://image.tmdb.org/t/p/w500/`

  return (
    <HomepageMoviesListContainer>
      <div>{movie.title}</div>
      <img src={images+movie.poster_path} />
    </HomepageMoviesListContainer>
  )
}