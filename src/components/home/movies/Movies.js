import React, { useEffect, useContext } from 'react'
import { MoviesLayout } from './Movies_layout'
import { MoviesAPI } from './movies_api'
import { Context } from '../../theme/store'

export const Movies = ({ title, fetchURL, isMain }) => {
  const { movies } = MoviesAPI(fetchURL)
  const images = `https://image.tmdb.org/t/p/w500/`

  const [state, dispatch] = useContext(Context);
  const { text } = state

  useEffect(() => {
    let regex = /text/gi
    const filtered = movies.map(movie => {
      return movie.original_title
    })
    let finalFilter = filtered.filter(each => {
      console.log(each)
    })
    console.log(finalFilter)
  }, [text])

  return (
    <div>
      <MoviesLayout.Title>{title}</MoviesLayout.Title>
      <MoviesLayout>
        {movies.map( movie => (
          <MoviesLayout.Image
            src={isMain ? images+movie?.poster_path : images+movie?.backdrop_path}
            alt={movie.title}
            key={movie.id} />
        ))}
      </MoviesLayout>
    </div>
  )
}