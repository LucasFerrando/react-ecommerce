import React from 'react'
import '../styles/Titulo.css'


function Titulo({tituloProps, subtitulo}) {

  return (
    <div>
      <h1 className='titulo'>{ tituloProps }</h1>
      <h2>{subtitulo}</h2>
    </div>
  )
}

export default Titulo