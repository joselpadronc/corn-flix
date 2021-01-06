import React, { useState } from 'react'
import { useLocation } from 'wouter'


// STATICS
import './style.css'




function SearchForm() {
  const [keyword, setKeyword] = useState()
  const [location, pushLocation] =useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    console.log(setKeyword(event.target.value))
  }

  return(
    <form className='searchForm' onSubmit={handleSubmit}>
      <input type='text' placeholder='Buscar ...' onChange={handleChange} value={keyword} className='searchForm-input'/>
      <button className='searchForm-btn'>Buscar</button>
    </form>
  )
}

export default SearchForm