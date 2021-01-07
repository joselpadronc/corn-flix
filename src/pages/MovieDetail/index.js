import React, { useState, useEffect } from 'react'

// COMPONENTS
import Spinner from 'components/Spinner/index'

// STATICS
import './style.css'
import Img from 'static/images/banner2.png'

// CONFIG
import { API_KEY, API_URL } from 'services/settings'


function MovieDetail({ params }) {
  const { id } = params
  const [movie, setMovie] = useState([])
  const [video, setVideo] = useState([])
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getMovieDetail()
    getMovieVideo()
    getMovieCast()
  }, [])

  const getMovieDetail = async () => {
    setLoading(true)
    const api_url = `${API_URL}movie/${id}?api_key=${API_KEY}&language=es`
    const data = await fetch(api_url)
    const movieDetail = await data.json()
    setMovie(movieDetail)
    setLoading(false)
  }

  const { genres = [] } = movie

  const getMovieVideo= async () => {
    setLoading(true)
    const api_url = `${API_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-Us`
    const data = await fetch(api_url)
    const movieVideo = await data.json()
    const { results = [] } = movieVideo
    setVideo(results[0])
    setLoading(false)
  }

  const getMovieCast= async () => {
    const api_url = `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=es`
    const data = await fetch(api_url)
    const movieCast = await data.json()
    const { cast = [] } = movieCast
    const castList = cast.slice(0, 4)
    setCast(castList)
  }

  return(
    <>
      <main className='MovieBanner'>
        <div className='MovieBanner-container'>
        { loading
          ? <Spinner/>
          :<img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt='Banner de la pelicula'/>
        }
        </div>
      </main>
      <section className='InfoSection'>
        <div className='InfoSection-container'>
          <h1>{movie.title}</h1>
          <div className='InfoSection1'>
            <article className='InfoSection-data'>
              <h5>{movie.release_date}</h5>
              <h5><a href={movie.homepage} target='_blank'>Ver ahora</a></h5>
            </article>
            <article className='InfoSection-categories'>
            {
              genres.map(({ name }) => (
                <p>{name}</p>
              ))
            }
            </article>
          </div>
          <div className='InfoSection2'>
            <article className='InfoSection-generalView'>
              <h2>Vista general</h2>
              <p>{movie.overview}</p>
              <div className='InfoSection-generalView__persons'>
              {
                cast.map(({ character, original_name }) => (
                  <div className='person'>
                    <h4>{original_name}</h4>
                    <p>{character}</p>
                  </div>
                ))
              }
              </div>
            </article>
            <article className='InfoSection-trailer'>
              <h2>Trailer</h2>
              {
                loading
                ? <Spinner/>
                : <iframe height='250' src={`https://www.youtube.com/embed/${video.key}`} title={video.type} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              }
            </article>
          </div>
        </div>
      </section>
    </>
  )
}


export default MovieDetail