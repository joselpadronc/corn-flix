import React from 'react'


// STATICS
import './style.css'

function SearchForm() {
  return(
    <form className='searchForm'>
      <input className='searchForm-input' placeholder='Buscar ...'/>
      <button className='searchForm-btn'>Buscar</button>
    </form>
  )
}

export default SearchForm