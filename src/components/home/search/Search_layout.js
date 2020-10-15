import React from 'react'
import { Container, Form, Input } from './Search_style'

export const SearchLayout = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

SearchLayout.Form = ({ children, handleSearch }) => {
  return (
    <Form onChange={handleSearch}>{children}</Form>
  )
}

SearchLayout.Input = ({ children, placeholder }) => {
  return (
    <Input placeholder={placeholder}>{children}</Input>
  )
}