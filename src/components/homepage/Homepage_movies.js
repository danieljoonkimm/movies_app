import React from 'react'
import styled from 'styled-components'
import { HomepageMoviesList } from './Homepage_movies_list'

const HomepageMoviesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
`

export const HomepageMovies = ({ movies }) => {
  const { results } = movies
  console.log(results)
  return (
    <div>
      {results === undefined ?
        <div>Loading</div>
        :
        <HomepageMoviesContainer>
          {results.map(movie => (
            <HomepageMoviesList movie={movie} key={movie.id}/>
          )
          )}
        </HomepageMoviesContainer>
      }
    </div>
  )
}