import React from 'react'
import { Link } from 'wouter'

// STATICS
import './style.css'
import defaultImg from 'static/images/WithoutImage.jpg'


function ResultCard({ id, title, image, release, overview }) {
  return(
    <Link to={`/movie/${id}`}>
      <article className='ResultCard'>
        <img src={
          image === null
          ? defaultImg
          :`https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`
        } alt={title}/>
        <div className='ResultCard-content'>
          <h2>{title}</h2>
          <p>{release}</p>
          <p>{
            overview === ""
            ? 'Sin contenido en la descripcion'
            : overview
          }</p>
        </div>
      </article>
    </Link>
  )
}

export default ResultCard