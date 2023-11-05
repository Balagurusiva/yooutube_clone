import { Avatar } from '@material-ui/core'
import React from 'react'
import { CheckCircleOutlineOutlined } from '@material-ui/icons'
import './ChannelRow.css'

export default  function ChannelRow({image,channel,subs,noOfvideos,description,Verified}) {
  return (
    <div className='ChannelRow'>
      <Avatar className='channelRow__avatar' src={image} alt={channel} />
      <div className='channelRow__detail'>
      <h4>{channel} {Verified && <CheckCircleOutlineOutlined />}</h4>
      <p>{subs} subscriber &#x2022; {noOfvideos} Videos</p>
      <p>{description}</p>
      </div>       
    </div>
  )
}

 
