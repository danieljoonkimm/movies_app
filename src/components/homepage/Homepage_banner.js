import React, { useState, useEffect } from 'react'
import axios from '../theme/axios'
import request from '../theme/requests'

export const HomepageBanner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await axios.get(request.fetchPopular)
      setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
      return data
    }
    fetchData()
  }, [])
  console.log('what', movie)

  return (
    <div style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.poster_path}")`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      height: '40vh'
      }}>
      <h1 style={{ top: '50%', position: 'relative', color: 'white'}}>{movie?.title || movie?.name || movie?.original_name}</h1>
      <p style={{ top: '50%', position: 'relative', color: 'white'}}>{movie?.overview}</p>
    </div>
  )
}