import styled from 'styled-components'

export const Container = styled.div`
  background-position: center center;
  background-size: cover;
  height: 40vh;
  ${props => props.movie &&
    `background-image: url(https://image.tmdb.org/t/p/w500${props?.movie})`
  }
`

export const Header = styled.div`
  top: 50%;
  position: relative;
  color: white;
`

export const Paragraph = styled.p`
  top: 50%;
  position: relative;
  color: white;
`