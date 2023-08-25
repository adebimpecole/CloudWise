import React from 'react'
import "./Searchbar.css"
import search from "../assets/search.svg"
import bell from "../assets/bell.svg"
import profile from "../assets/profile.svg"

const Searchbar = () => {
  return (
    <div className='search-box'>
      <span className="search_box">
          <img src={search} className="search_icon" alt="icon"/>
          <input value="" type="text" className="search" placeholder="Search events..."/>
      </span>
      <span className='profile_button'>
        <img src={bell} className="search_icon" alt="icon"/>
        <img src={profile} className="search_icon" alt="icon"/>
      </span>
      
    </div>
  )
}

export default Searchbar
