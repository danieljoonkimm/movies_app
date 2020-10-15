import React from 'react'
import styled from 'styled-components'
import { Movies, Header, Banner } from './index'
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

  //this works too
  const traverseData = () => {
    let rows = []
    for(let i = 0; i < titles.length; i++) {
      Object.keys(titles[i]).forEach(key => rows.push([key, titles[i][key]]))
    }
    
    return rows.map( movie => 
    <Movies title={movie[0]} fetchURL={movie[1]} />)
  }

  return (
    <HomepageContainer>
      {traverseData()}
      <Header />
      <Banner />
      <Movies title='Popular Movies' fetchURL={requests.fetchPopular} images={requests.fetchImages} isMain/>
      <Movies title='Popular TV Shows' fetchURL={requests.fetchPopularTV}/>
      <Movies title='Top Rated Movies' fetchURL={requests.fetchTopRated}/>
      <Movies title='Top Rated TV Shows' fetchURL={requests.fetchTopRatedTV}/>
      <Movies title='Upcoming Movies' fetchURL={requests.fetchUpcoming}/>
    </HomepageContainer>
  )
}