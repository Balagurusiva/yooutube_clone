import React from 'react'
import './videoRow.css'

function VideoRow(props) {
  return (
    <div className='searchpage__videocard'>

     <div> <img className='searchpage__videoimg' src = {`../img/${props.items.img}`} /></div>
      
     <div className="searchpage__videodetail">
        <h3>{props.items.title}</h3>
        <p className='detail'>{props.items.channelName} &#x2022; <span className='sub'><span className='subnum'>{props.items.sub}</span>Subscriber</span>  &#x2022; {props.items.view}Views  &#x2022; {props.items.noOfvideos}Videos  &#x2022; {props.items.time} </p>
        <p className='discription'>{props.items.discription}</p>
     </div>
    </div>
  )
}

export default VideoRow
