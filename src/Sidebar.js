import React, { PureComponent } from 'react'
import './sidebar.css'
import SidebarRow from "./SidebarRow"
import Home from "@material-ui/icons/Home";
import Subscription from "@material-ui/icons/Subscriptions"
import Trending from "@material-ui/icons/Whatshot"
import VideoLib  from "@material-ui/icons/VideoLibrary"
import History from "@material-ui/icons/History"
import OndemandVideo  from '@material-ui/icons/OndemandVideo'
import WatchLater from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlined  from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutLined  from  '@material-ui/icons/ExpandMoreOutlined'
import {Link} from 'react-router-dom'

export class Sidebar extends PureComponent {
  render() {
    return (
      <div className='sidebar'>
        <Link to={'/'} className="home__routelink">
          <SidebarRow selected Icons = {Home} title ="Home"/>
        </Link>
         
        <SidebarRow Icons = {Trending} title ="Trending"/>
        <SidebarRow Icons = {Subscription} title ="Subscription"/>
        <hr />
        <SidebarRow Icons = {VideoLib} title ="Library"/>
        <SidebarRow Icons = {History} title ="History"/>
        <SidebarRow Icons = {OndemandVideo} title ="Your videos"/>
        <SidebarRow Icons = {WatchLater} title ="Watch later"/>
        <SidebarRow Icons = {ThumbUpAltOutlined} title ="Liked videos"/>
        <SidebarRow Icons = {ExpandMoreOutLined} title ="Show more"/>
        
        
                
         
      </div>
    )
  }
}

export default Sidebar
