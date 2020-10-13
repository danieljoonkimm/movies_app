import React from 'react'
import { HomepageContainer, HomepageImage, HomepageTitle } from './Homepage_style'

//homepage for movies list
export const Home = ({ children }) => {
  return (
    <HomepageContainer>{children}</HomepageContainer>
  )
}

Home.Title = ({ children }) => {
  return (
    <HomepageTitle>{children}</HomepageTitle>
  )
}

Home.Image = ({ src, alt }) => {
  return (
    <HomepageImage src={src} alt={alt}></HomepageImage>
  )
}