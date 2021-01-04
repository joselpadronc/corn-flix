import React from 'react'

// STATICS
import './style.css'
import PeliCardImg from 'static/images/peliCardImg.png'

function PeliCard() {
  return(
    <article className='PeliCard'>
      <img src={PeliCardImg}></img>
      <div className='PeliCard-overlay'>
        <h2>Bob esponja</h2>
        <p>1 ene, 2021</p>
      </div>
    </article>
  )
}

export default PeliCard