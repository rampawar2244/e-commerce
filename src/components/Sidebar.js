import React from 'react'
import "./assets/Sidebar.scss"
function Sidebar({ selected, activeTab, func}) {
  return (
    <div className='sideBar'>
      
      <div onClick={()=>func(0)}  className={`sideNav_items ${selected && "selected"}`}>Home</div>
      <div onClick={()=>func(1)} className={`sideNav_items ${selected && "selected"}`}>Brands</div>
      <div className={`sideNav_items ${selected && "selected"}`}>Men</div>
      <div className={`sideNav_items ${selected && "selected"}`}>Women</div>
      <div className={`sideNav_items ${selected && "selected"}`}>Kids</div>
      <div className={`sideNav_items ${selected && "selected"}`}>Electronics</div>
    
    </div>  
  )
}

export default Sidebar;