import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>BMI CALCULATOR</h1>
      <ul>
      <Link to={"/"}><li>Home</li></Link>  
      <Link to={"/info"}><li>Info</li></Link> 
      <Link to={"/calculator"}><li>Calculator</li></Link>  
      </ul>
    </div>
  )
}

export default Navbar