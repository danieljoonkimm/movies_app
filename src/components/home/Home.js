import React from 'react'
import styled from 'styled-components'
import { Movies, Header, Banner } from './index'
import requests from '../theme/requests'

const HomepageContainer = styled.div`
  background-color: #1c1c1c;
`

export const Homepage = () => {

  return (
    <HomepageContainer>
      <Header />
      <Banner />
      <Movies title='Popular Movies' fetchURL={requests.fetchPopular} images={requests.fetchImages}/>
      <Movies title='Popular TV Shows' fetchURL={requests.fetchPopularTV}/>
      <Movies title='Top Rated Movies' fetchURL={requests.fetchTopRated}/>
      <Movies title='Top Rated TV Shows' fetchURL={requests.fetchTopRatedTV}/>
      <Movies title='Upcoming Movies' fetchURL={requests.fetchUpcoming}/>
    </HomepageContainer>
  )
}