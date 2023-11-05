import React  from 'react'
import './recommandedvideos.css'
import Cards from "./Card.js"
import data from "./data.js"


export default function Recommandedvideos(){
 
  const cards = data.map(item => {
    return(
        <Cards 
         items = {item}        
        />
    )
   })

    return (
      <div className='recommandedvideos'>
        <h1>Recommended</h1>
        <div className='video__cards'>
            {cards}
        </div>
      </div>
    )
  }

 