import React from 'react'
import { Link } from 'wouter'

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
          <Link to='/'>
            <img src={Logo} alt='Logo de CorpFlix' />
          </Link>
          <Link to='/'>
            <img src={Up} alt='Boton subir' />
          </Link>
        </div>
        <div className='Footer-container__part2'>
          <p>API de themoviedb.org</p>
          <a href='https://github.com/joselpadronc' target='_blank'>
            <img src={GitHub} alt='Logo de GitHub' />
          </a>
        </div>
      </div>
      <div className='Footer-container__minifooter'>
        <p>Proyecto para practicar React.js</p>
      </div>
    </footer>
  )
}

export default Footer