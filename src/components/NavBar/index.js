import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'

// COMPONENTS
import DrawerManu from 'components/DrawerMenu/index'

// STATICS
import './style.css'
import LogoGrande from 'static/images/LogoGrande.png'
import MenuIcon from 'static/images/MenuIcon.svg'


function NavBar() {
  const [drawerMenu, setDrawerMenu] = useState(false)
  const [keyword, setKeyword] = useState()
  const [location, pushLocation] =useLocation()

  function handleDraweMenu() {
    setDrawerMenu(!drawerMenu)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    console.log(setKeyword(event.target.value))
  }

  return (
    <>
      <header className='Nav'>
        <nav className='Nav-wrapper'>
          <Link to='/'>
            <img src={LogoGrande} alt='Logo de CornFlix'/>
          </Link>
          <div className='Nav-search'>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={keyword} placeholder='Busacar ...'/>
              <button>Buscar</button>
            </form>
          </div>
          <button className='Nav-menu' onClick={handleDraweMenu}>
            <img src={MenuIcon} alt='Boton menu'/>
          </button>
        </nav>
      </header>
      {
        drawerMenu ?
          <DrawerManu/>
        : ""
      }
    </>
  )
}

export default NavBar