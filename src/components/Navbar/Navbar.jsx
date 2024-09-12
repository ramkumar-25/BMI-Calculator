import React, { useRef } from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import menu_icon from "../../assets/menu-icon.png"
import close_icon from "../../assets/white-close-icon-png-8.png"

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0"
  }
 
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <h1>BMI CALCULATOR</h1>
      <ul ref={menuRef}>
      <Link to={"/"}><li>Home</li></Link>  
      <Link to={"/info"}><li>Info</li></Link> 
      <Link to={"/calculator"}><li>Calculator</li></Link> 
      <img src={close_icon} alt="close icon" className='close-icon' onClick={closeMenu} /> 
      </ul>
      <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={openMenu}/>
    </div>
  )
}

export default Navbar