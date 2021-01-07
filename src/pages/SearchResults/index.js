import React, { useEffect, useState } from 'react'

// COMPONENTS
import SearchForm from 'components/SearchForm/index'
import ResultCard from 'components/ResultCard/index'
import Spinner from 'components/Spinner/index'

// CONFIG
import {API_KEY, API_URL} from 'services/settings'


// STATICS
import './style.css'


function SearchResults({ params }) {
  const { keyword } = params
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getMovies()
  }, [keyword])

  const getMovies = async () => {
    setLoading(!loading)
    const api_url = `${API_URL}search/movie?api_key=${API_KEY}&language=es&query=${keyword}&page=1&include_adult=false`
    const data = await fetch(api_url)
    const movies = await data.json()
    const { results = [] } = movies
    setMovies(results)
    setLoading(false)
  }


  return(
    <>
      <main className='SearchSection'>
        <h1>Seguir buscando pelis</h1>
        <SearchForm/>
      </main>
      <section className='ResultsSection'>
      {
        loading
        ? <Spinner/>
        : movies.map(({ id, title, poster_path, release_date, overview }) => (
            <ResultCard
              key={id}
              id={id}
              image={poster_path}
              title={title}
              release={release_date}
              overview={overview}
            />
          )
        )
      }
      </section>
    </>
  )
}


export default SearchResults