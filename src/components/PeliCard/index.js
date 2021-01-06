import React from 'react'
import { Link } from 'wouter'

// STATICS
import './style.css'

function PeliCard({ image, title, release, id }) {

  return(
    <Link to={`/movie/${id}`}>
      <article className='PeliCard'>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`} alt={title}></img>
        <div className='PeliCard-overlay'>
          <h3>{title}</h3>
          <p>{release}</p>
        </div>
      </article>
    </Link>
  )
}

export default PeliCard