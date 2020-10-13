import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

export const Title = styled.h1`
  color: white;
`

export const Image = styled.img`
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