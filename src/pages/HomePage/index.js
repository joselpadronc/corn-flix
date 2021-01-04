import React from 'react'

// COMPONENTS
import NavBar from 'components/NavBar/index'
import SearchForm from 'components/SearchForm/index'
import Carrousel from 'components/Carrousel/index'
import Footer from 'components/Footer/index'


// STATICS
import './style.css'


function HomePage() {
  return(
    <>
      <NavBar/>
      <main className='Banner'>
        <div className='Banner-container'>
          <h1>Encuantra informacion sobre miles de peliculas</h1>
          <SearchForm/>
        </div>
      </main>
      <Carrousel/>
      <Carrousel/>
      <Footer/>
    </>
  )
}

export default HomePage