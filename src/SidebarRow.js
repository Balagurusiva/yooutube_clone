import React  from 'react'
import './sidebarrow.css'

export function SidebarRow({selected, Icons , title}){
    
    return (
      <div className={`sidebar__rows ${selected && "selected"}`}>
        <Icons className="sidebarrow__icon"/>
        <h2 className="sidebarrow__title">{title}</h2>
      </div>
    )
  }
 

export default SidebarRow
