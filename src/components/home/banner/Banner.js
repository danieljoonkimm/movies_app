import React, { useState, useEffect } from 'react'
import axios from '../../theme/axios'
import request from '../../theme/requests'
import { BannerLayout } from './Banner_layout'

export const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await axios.get(request.fetchPopular)
      setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
      return data
    }
    fetchData()
  }, [])
  
  return (
    <BannerLayout movie={movie?.backdrop_path}>
      <BannerLayout.Header>{movie?.title || movie?.name || movie?.original_name}</BannerLayout.Header>
      <BannerLayout.Paragraph>{movie?.overview}</BannerLayout.Paragraph>
    </BannerLayout>
  )
}