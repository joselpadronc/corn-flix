import React from 'react'

// COMPONENTS
import PeliCard from 'components/PeliCard/index'

// STATICS
import './style.css'


function Carrousel() {
  return(
    <section className='Carrousel'>
      <div className='Carrouse-title'>
        <h2>Tendencias</h2>
      </div>
      <div className='Carrousel-container'>
        <div className='Carrousel-container__cards'>
          <PeliCard/>
          <PeliCard/>
          <PeliCard/>
          <PeliCard/>
          <PeliCard/>
          <PeliCard/>
        </div>
      </div>
    </section>
  )
}

export default Carrousel