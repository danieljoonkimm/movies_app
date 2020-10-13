import React, { useState, useEffect } from 'react'
import axios from '../theme/axios'

export const HomepageAPI = (fetchURL) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await axios.get(fetchURL)
      setMovies(...movies, data.results)
    }
    fetchData()
  }, [fetchURL])

  return {movies}
}