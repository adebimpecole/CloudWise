import React from 'react'
import "./Navbar.css"
import dash from "../assets/menu2.svg"
import map from "../assets/map2.svg"
import find from "../assets/find.svg"
import cal from "../assets/calender.svg"
import set from "../assets/sets.svg"
import log from "../assets/log.svg"

const Navbar = () => {
  return (
    <div className='nav_bar'>
        <span className='side_logo'>CloudWise</span>
      <ul>
        <li className='nav_link'><img src={dash} className='nav_icons'/>Dashboard</li>
        <li className='nav_link'><img src={map} className='nav_icons'/>Map</li>
        <li className='nav_link'><img src={find} className='nav_icons'/>Location</li>
        <li className='nav_link'><img src={cal} className='nav_icons'/>Calender</li>
        <li className='nav_link'><img src={set} className='nav_icons'/>Settings</li>
      </ul>
      <span className='nav_link logout'><img src={log} className='nav_icons'/>Logout</span>
    </div>
  )
}

export default Navbar
