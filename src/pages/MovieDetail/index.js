import React from 'react'

// COMPONENTS
import NavBar from 'components/NavBar/index'
import Footer from 'components/Footer/index'

// STATICS
import './style.css'
import Img from 'static/images/banner2.png'


function MovieDetail() {
  return(
    <>
      <NavBar/>
      <main className='MovieBanner'>
        <div className='MovieBanner-container'>
          <img src={Img} alt='Banner de la pelicula'/>
        </div>
      </main>
      <section className='InfoSection'>
        <div className='InfoSection-container'>
          <h1>Bob esponja: Un héroe al rescate</h1>
          <div className='InfoSection1'>
            <article className='InfoSection-data'>
              <h5>1 / 1 / 2021 (US)</h5>
              <h5>1 hr 35 min</h5>
            </article>
            <article className='InfoSection-categories'>
              <p>Comedia</p>
              <p>Animación</p>
              <p>Aventura</p>
              <p>Fantasía</p>
              <p>Familia</p>
            </article>
          </div>
          <div className='InfoSection2'>
            <article className='InfoSection-generalView'>
              <h2>Vista general</h2>
              <p>Cuando desaparece su amigo Gary, Bob Esponja se embarca en una alocada misión con Patricio muy lejos de Fondo de Bikini para rescatarlo.</p>
              <div className='InfoSection-generalView__persons'>
                <div className='person'>
                  <h4>Tim Hill</h4>
                  <p>Director, Screenplay, Story</p>
                </div>
                <div className='person'>
                  <h4>Stephen Hillenburg</h4>
                  <p>Characters</p>
                </div>
                <div className='person'>
                  <h4>Tim Hill</h4>
                  <p>Director, Screenplay, Story</p>
                </div>
              </div>
            </article>
            <article className='InfoSection-trailer'>
              <h2>Trailer</h2>
              <iframe height='250' src="https://www.youtube.com/embed/jNyl1AaZQXI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </article>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}


export default MovieDetail