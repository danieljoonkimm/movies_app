import React from 'react'
import { HomepageBanner, HomepageBannerHeader, HomepageBannerP } from './Homepage_style'

//homepage for movies list
export const Banner = ({ children, movie }) => {
  return (
    <HomepageBanner>{children}</HomepageBanner>
  )
}

Banner.Header = ({ children }) => {
  return (
    <HomepageBannerHeader>{children}</HomepageBannerHeader>
  )
}

//banner
Banner.Paragraph = ({ children }) => {
  return (
    <HomepageBannerP>{children}</HomepageBannerP>
  )
}