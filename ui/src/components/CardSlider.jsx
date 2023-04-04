import React from 'react'
import Card from './Card'
import styled from 'styled-components'

function CardSlider({data, title}) {
  return (
    <div className='flex'>
        {data.map((movie, i) => {
            return <Card movieData={movie} i={i} key={movie.id} />
        })}
    </div>
  )
}
const Container = style.div``;

export default CardSlider