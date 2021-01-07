import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'

// COMPONENTS
import DrawerManu from 'components/DrawerMenu/index'

// STATICS
import './style.css'
import LogoGrande from 'static/images/LogoGrande.png'
import MenuIcon from 'static/images/MenuIcon.svg'
import moon from 'static/images/moon.svg'
import sun from 'static/images/sun.svg'


function NavBar({ setTheme, theme }) {
  const [drawerMenu, setDrawerMenu] = useState(false)
  const [keyword, setKeyword] = useState()
  const [location, pushLocation] =useLocation()

  function handleDrawerMenu() {
    setDrawerMenu(!drawerMenu)
  }

  function handleChangeTheme() {
    setTheme(!theme)
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
          <div className='Nav-theme'>
            <button onClick={handleChangeTheme}>
              {
                theme
                ? <img src={sun} alt='Cambio detema'/>
                : <img src={moon} alt='Cambio detema'/>
              }
            </button>
          </div>
          <div className='Nav-search'>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={keyword} placeholder='Busacar ...'/>
              <button>Buscar</button>
            </form>
          </div>
          <button className='Nav-menu' onClick={handleDrawerMenu}>
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