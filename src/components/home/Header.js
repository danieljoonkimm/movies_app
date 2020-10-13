import React from 'react'
import styled from 'styled-components'

const HomeHeaderContainer = styled.h1`
  color: white;
  margin: 0;
  padding: 1em 0px;
`

export const Header = () => (
  <HomeHeaderContainer>Movie Database</HomeHeaderContainer>
)