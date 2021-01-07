import React from 'react'

// COMPONENTS
import SearchForm from 'components/SearchForm/index'
import { CarrouselTrending, CarrouselPopular } from 'components/Carrousel/index'


// STATICS
import './style.css'


function HomePage() {
  return(
    <>
      <main className='Banner'>
        <div className='Banner-container'>
          <h1>Encuantra informacion sobre miles de peliculas</h1>
          <SearchForm/>
        </div>
      </main>
      <CarrouselTrending/>
      <CarrouselPopular/>
    </>
  )
}

export default HomePage