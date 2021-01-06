import React, { useState } from 'react'
import { useLocation } from 'wouter'

// STYLES
import './style.css'

function DrawerManu() {
  const [keyword, setKeyword] = useState()
  const [location, pushLocation] =useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    console.log(setKeyword(event.target.value))
  }

  return (
    <div className='DrawerMenu'>
      <div className='DrawerMenu-content'>
        <div className='DrawerMenu-content__search'>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={keyword} placeholder='Busacar ...'/>
            <button>Buscar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DrawerManu