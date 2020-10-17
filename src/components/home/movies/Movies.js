import React, { useEffect, useContext, useState } from 'react'
import { MoviesLayout } from './Movies_layout'
import { MoviesAPI } from './movies_api'
import { Context } from '../../theme/store'

export const Movies = ({ title, fetchURL, isMain }) => {
  const { movies } = MoviesAPI(fetchURL)
  const images = `https://image.tmdb.org/t/p/w500/`

  const [state, dispatch] = useContext(Context);
  const { text } = state
  const [searchResults, setSearchResults] = useState([])

  const results = movies.map(movie => {
    return movie.original_title ? movie.original_title : movie.original_name
  })

  useEffect(() => {
    const filter = results.filter(movie => movie.toLowerCase().includes(text))
    setSearchResults(filter)
    console.log(searchResults)
  }, [text])

  const handleMovieClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <MoviesLayout.Title>{title}</MoviesLayout.Title>
      <MoviesLayout>
        {movies.map( movie => (
          <MoviesLayout.Image
            handleMovieClick={handleMovieClick}
            src={isMain ? images+movie?.poster_path : images+movie?.backdrop_path}
            alt={movie.title}
            key={movie.id} />
        ))}
      </MoviesLayout>
    </div>
  )
}