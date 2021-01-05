import React from 'react'

// COMPONENTS
import NavBar from 'components/NavBar/index'
import SearchForm from 'components/SearchForm/index'
import Footer from 'components/Footer/index'
import ResultCard from 'components/ResultCard/index'

// STATICS
import './style.css'


function SearchResults() {
  return(
    <>
      <NavBar/>
      <main className='SearchSection'>
        <h1>Seguir buscando pelis</h1>
        <SearchForm/>
      </main>
      <section className='ResultsSection'>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
        <ResultCard/>
      </section>
      <Footer/>
    </>
  )
}


export default SearchResults