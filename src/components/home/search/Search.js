import React, { useEffect, useState, useContext } from 'react'
import { SearchLayout } from './Search_layout'
import { UseForm } from './useForm'
import { Context } from '../../theme/store'

export const Search = ({ placeholder }) => {
  const [search, handleSearch] = UseForm('')

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    dispatch({type: 'SEARCH_TEXT', payload: search})
  }, [search])

  return (
    <SearchLayout>
      <SearchLayout.Form handleSearch={handleSearch}>
        <SearchLayout.Input placeholder={placeholder}></SearchLayout.Input>
      </SearchLayout.Form>
    </SearchLayout>
  )
}