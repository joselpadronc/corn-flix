import React from 'react'

// STYLES
import './style.css'

function DrawerManu() {
  return (
    <div className='DrawerMenu'>
      <div className='DrawerMenu-content'>
        <li><a href='google.com'>Más populares</a></li>
        <li><a href='google.com'>Tendencias</a></li>
        <div className='DrawerMenu-content__search'>
          <form>
            <input placeholder='Busacar ...'/>
            <button>Buscar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DrawerManu