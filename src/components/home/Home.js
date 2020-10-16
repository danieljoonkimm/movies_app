import React from 'react'
import styled from 'styled-components'
import { Movies, Header, Banner, Search } from './index'
import requests from '../theme/requests'

const HomepageContainer = styled.div`
  background-color: #1c1c1c;
`

export const Homepage = () => {
  const { fetchPopular, fetchPopularTV, fetchTopRated, fetchTopRatedTV, fetchUpcoming } = requests

  const titles = [
    {'Popular Movies': fetchPopular},
    {'Popular TV Shows': fetchPopularTV},
    {'Top Rated Movies': fetchTopRated},
    {'Top Rated TV Shows': fetchTopRatedTV},
    {'Upcoming Movies': fetchUpcoming}
  ]

  const loopAndDisplay = () => {
    let rows = []

    for(let i = 0; i < titles.length; i++) {
      Object.keys(titles[i]).forEach(key => (
        key == 'Popular Movies' ? rows.push(<Movies title={key} fetchURL={titles[i][key]} isMain></Movies>) :
        rows.push(<Movies title={key} fetchURL={titles[i][key]}></Movies>)
      ))
    }
    return rows
  }

  return (
    <HomepageContainer>
      <Header />
      {loopAndDisplay()}
      <Search placeholder='search ..'/>
      <Banner />
      {/* <Movies title='Popular Movies' fetchURL={requests.fetchPopular} images={requests.fetchImages} isMain/>
      <Movies title='Popular TV Shows' fetchURL={requests.fetchPopularTV}/>
      <Movies title='Top Rated Movies' fetchURL={requests.fetchTopRated}/>
      <Movies title='Top Rated TV Shows' fetchURL={requests.fetchTopRatedTV}/>
      <Movies title='Upcoming Movies' fetchURL={requests.fetchUpcoming}/> */}
    </HomepageContainer>
  )
}