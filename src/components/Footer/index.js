import React from 'react'

// STATICS
import './style.css'
import Logo from 'static/images/LogoGrande.png'
import Up from 'static/images/upIcon.svg'
import GitHub from 'static/images/github.svg'


function Footer() {
  return (
    <footer className='Footer'>
      <div className='Footer-container'>
        <div className='Footer-container__part1'>
          <img src={Logo} alt='Logo de CorpFlix' />
          <button>
            <img src={Up} alt='Boton subir' />
          </button>
        </div>
        <div className='Footer-container__part2'>
          <p>API de themoviedb.org</p>
          <button>
            <img src={GitHub} alt='Logo de GitHub' />
          </button>
        </div>
      </div>
      <div className='Footer-container__minifooter'>
        <p>Proyecto para practicar React.js</p>
      </div>
    </footer>
  )
}

export default Footer