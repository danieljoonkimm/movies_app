import React, { useEffect, useState } from 'react'
import { SearchLayout } from './Search_layout'
import { UseForm } from './useForm'

export const Search = ({ placeholder }) => {
  const [keyword, setKeyword] = useState('')
  const [search, handleSearch] = UseForm('')

  useEffect(() => {
    setKeyword(prevState => prevState = search)
  }, [search])

  return (
    <SearchLayout>
      <SearchLayout.Form handleSearch={handleSearch}>
        <SearchLayout.Input placeholder={placeholder}></SearchLayout.Input>
      </SearchLayout.Form>
    </SearchLayout>
  )
}