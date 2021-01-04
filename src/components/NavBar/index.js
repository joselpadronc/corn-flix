import React, { useState } from 'react'

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
    // console.log(setDrawerMenu(true))
  }


  return (
    <>
      <header className='Nav'>
        <nav className='Nav-wrapper'>
          <img src={LogoGrande} alt='Logo de CornFlix'/>
          <div className='Nav-links'>
            <a href='google.com'>Más populares</a>
            <a href='google.com'>Tendencias</a>
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