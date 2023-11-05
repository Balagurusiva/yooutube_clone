import React from 'react'
import './card.css'
import Avatar from "@material-ui/core/Avatar"

function Card(props) {
  return (
    <div className='video__card'>
      
      <img src = {`../img/${props.items.img}`} />
      <div className="tambnail__icons">
        <Avatar />
        <div className="tambnail__detail">
        <h4>{props.items.title}</h4>
        <h5>{props.items.channelName}</h5>
        <h5>{props.items.view} &#x2022; {props.items.time}</h5>
        
        </div>
      </div> 
    </div>
  )
}

export default Card
