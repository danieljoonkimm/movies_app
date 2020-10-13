import React from 'react'
import { Container, Header, Paragraph } from './Banner_style'

export const BannerLayout = ({ children, movie }) => {
  return (
    <Container movie={movie}>{children}</Container>
  )
}

BannerLayout.Header = ({ children }) => {
  return (
    <Header>{children}</Header>
  )
}

BannerLayout.Paragraph = ({ children }) => {
  return (
    <Paragraph>{children}</Paragraph>
  )
}