import React from 'react'
import { Link } from 'wouter'

// STAICS
import './style.css'
import Img404 from 'static/images/404.png'

function NotFoundPage() {
  return(
    <main className='main404'>
      <h1>Pagina no encontrada</h1>
      <img src={Img404}/>
      <Link to='/'>Ir a inicio</Link>
    </main>
  )
}

export default NotFoundPage