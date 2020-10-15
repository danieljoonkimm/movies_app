import React, { useState } from 'react'

export const UseForm = (initialValue) => {
  const [search, setSearch] = useState(initialValue)

  return [
    search, e => {
      setSearch(e.target.value)
    }
  ]
}