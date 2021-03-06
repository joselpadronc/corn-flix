import React, { useState, useEffect} from 'react'

// COMPONENTS
import PeliCard from 'components/PeliCard/index'
import Spinner from 'components/Spinner/index'

// CONFIG
import {API_KEY, API_URL} from 'services/settings'

// STATICS
import './style.css'


function CarrouselTrending() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTrendingMovies()
  }, [])

  const getTrendingMovies = async () => {
    setLoading(!loading)
    const api_url = `${API_URL}trending/movie/day?api_key=${API_KEY}&language=es&page=1`
    const data = await fetch(api_url)
    const movies = await data.json()
    const { results = [] } = movies
    setMovies(results)
    setLoading(false)
  }

  return(
    <section className='Carrousel'>
      <div className='Carrouse-title'>
        <h2>Tendencias</h2>
      </div>
      <div className='Carrousel-container'>
        <div className='Carrousel-container__cards'>
        {
          loading
          ? <Spinner/>
          : movies.map(({ id, poster_path, title, release_date }) => (
            <PeliCard
              id={id}
              image={poster_path}
              title={title}
              release={release_date}
            />
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default CarrouselTrending