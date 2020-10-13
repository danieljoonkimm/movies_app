import React from 'react'
import styled from 'styled-components'
import { HomepageHeader, HomepageMovies} from './index'
import requests from '../theme/requests'

const HomepageContainer = styled.div`
  background-color: #1c1c1c;
`

export const Homepage = () => {

  return (
    <HomepageContainer>
      <HomepageHeader />
      <HomepageMovies title='Popular Movies' fetchURL={requests.fetchPopular} images={requests.fetchImages}/>
      <HomepageMovies title='Popular TV Shows' fetchURL={requests.fetchPopularTV}/>
      <HomepageMovies title='Top Rated Movies' fetchURL={requests.fetchTopRated}/>
      <HomepageMovies title='Top Rated TV Shows' fetchURL={requests.fetchTopRatedTV}/>
      <HomepageMovies title='Upcoming Movies' fetchURL={requests.fetchUpcoming}/>
    </HomepageContainer>
  )
}