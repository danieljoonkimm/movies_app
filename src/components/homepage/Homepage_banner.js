import React, { useState, useEffect } from 'react'
import axios from '../theme/axios'
import request from '../theme/requests'

export const HomepageBanner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await axios.get(request.fetchPopular)
      setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
    </div>
  )
}