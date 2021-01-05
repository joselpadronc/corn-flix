import React from 'react'

// STATICS
import './style.css'
import Img from 'static/images/imgResultCard.png'

function ResultCard() {
  return(
    <article className='ResultCard'>
      <img src={Img}/>
      <div className='ResultCard-content'>
        <h2>Mascotas Unidas</h2>
        <p>8 noviembre 2019</p>
        <p>Un astuto perro y una gatita consentida lideran a un equipo de héroes ...</p>
      </div>
    </article>
  )
}

export default ResultCard