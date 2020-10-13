import React from 'react'
import { Container, Image, Title } from './Movies_style'

export const MoviesLayout = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

MoviesLayout.Title = ({ children }) => {
  return (
    <Title>{children}</Title>
  )
}

MoviesLayout.Image = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} />
  )
}