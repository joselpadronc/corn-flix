import React, { useState } from 'react'
import { Link } from 'wouter'

// COMPONENTS
import DrawerManu from 'components/DrawerMenu/index'

// STATICS
import './style.css'
import LogoGrande from 'static/images/LogoGrande.png'
import MenuIcon from 'static/images/MenuIcon.svg'


function NavBar() {
  const [drawerMenu, setDrawerMenu] = useState(false)

  function handleDraweMenu() {
    setDrawerMenu(!drawerMenu)
  }


  return (
    <>
      <header className='Nav'>
        <nav className='Nav-wrapper'>
          <Link to='/'>
            <img src={LogoGrande} alt='Logo de CornFlix'/>
          </Link>
          <div className='Nav-links'>
            <Link to='/#popular'>Más populares</Link>
            <Link to='/#trends'>Tendencias</Link>
          </div>
          <div className='Nav-search'>
            <form>
              <input placeholder='Busacar ...'/>
              <button>Buscar</button>
            </form>
          </div>
          <button className='Nav-menu' onClick={handleDraweMenu}>
            <img src={MenuIcon}/>
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