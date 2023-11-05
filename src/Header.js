import React, {useState} from 'react';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import "./header.css"
import { Link } from 'react-router-dom';

export default function Header() {
  const [searchData, setsearchData] = useState('')
  return (
    <div className='header'>

    <div className = 'header__left'>
      <MenuIcon />
      <Link to={'/'} >
       <img 
        className='header__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        alt = "youtube-img" 
       />
      </Link>
       
    </div> 

    <div className='header__center'>
      <input 
        onChange = {e => setsearchData(e.target.value)} 
        value ={searchData} 
        placeholder = "search" 
        type= "text" 
      />
      <Link to={`/search/${searchData}`} className='search__routelink'>
        <SearchIcon  className='search__icon'/> 
      </Link>
       
    </div>

    <div className='header__right'>
      <VideoCallIcon className = "header__right_icons"/>
      <AppsIcon className = "header__right_icons"/>
      <NotificationIcon className = "header__right_icons"/>
      <Avatar className = "header__right_icons" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLonMbLU96BUXRQMRGsUlLn9runoJ9njyM7g&usqp=CAU"/>
    </div>   
     
    </div>
  )
}

