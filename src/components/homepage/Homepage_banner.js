import React, { useState, useEffect } from 'react'
import axios from '../theme/axios'
import request from '../theme/requests'
import { Banner } from './Homepage_outline_banner'

export const HomepageBanner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await axios.get(request.fetchPopular)
      setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
      // return data
    }
    fetchData()
  }, [])

  return (
    <Banner style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.poster_path}")`}}>
      <Banner.Header>{movie?.title || movie?.name || movie?.original_name}</Banner.Header>
      <Banner.Paragraph>{movie?.overview}</Banner.Paragraph>
    </Banner>
  )
}