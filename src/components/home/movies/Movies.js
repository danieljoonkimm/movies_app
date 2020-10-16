import React from 'react'
import { MoviesLayout } from './Movies_layout'
import { MoviesAPI } from './movies_api'

export const Movies = ({ title, fetchURL, isMain }) => {
  const {movies} = MoviesAPI(fetchURL)
  const images = `https://image.tmdb.org/t/p/w500/`

  //import text = once search filter complete, need to access search input data here..so i can filter from api call
    //movies.filter(whateverdata => whateverdata.name === text)

  return (
    <div>
      <MoviesLayout.Title>{title}</MoviesLayout.Title>
      <MoviesLayout>
        {movies.map( movie => (
          <MoviesLayout.Image
            src={isMain ? images+movie.poster_path : images+movie.backdrop_path}
            alt={movie.title}
            key={movie.id} />
        ))}
      </MoviesLayout>
    </div>
  )
}