import styled from 'styled-components'

export const HomepageContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

export const HomepageTitle = styled.h1`
  color: white;
`

export const HomepageImage = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 300px;
  min-height: 250px;
  transition: transform 450ms;
  margin-right: 10px;

    &:hover {
      transform: scale(1.08);
    }
  }
`

//for banner
export const HomepageBanner = styled.div`
  backgroundPosition: 'center center';
  backgroundSize: 'cover';
  height: '40vh';
`

export const HomepageBannerHeader = styled.div`
  top: 50%;
  position: relative;
  color: white;
`

export const HomepageBannerP = styled.p`
  top: 50%;
  position: relative;
  color: white;
`