import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { BrowserRouter as Router , NavLink, Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Careers from './Careers'
import Login from './Login'
import Contact from './Contact'





export default function Navbar() {
  const [searchedtext,setSearchedtext]=useState("");
  const [ismenuopen,setIsmenuopen]=useState(false);

  const toggleMenu=()=>{
    setIsmenuopen(!ismenuopen);
  }
  
  return (
    <Router>
       <nav className='navbar'>
      <div className='navbar_logo'>
        <NavLink to='/' > <img className='navbar_logo_image' src="https://247erp.net/files/ges_logo.jpg" alt="Global Enterprise Solutions" /></NavLink>
       
      </div>
      <div className='menu' onClick={toggleMenu}>
        <div className='menu_icon'></div>
        <div className='menu_icon'></div>
        <div className='menu_icon'></div>
      </div>
      <ul className={ismenuopen ? 'navbar_links active' : 'navbar_links' }>
        <input type='text' placeholder='Search...' value={searchedtext} onChange={(e)=>{setSearchedtext(e.target.value)}}/>
        <li> <NavLink to ='/'       onClick={toggleMenu}> Home </NavLink> </li>
        {/* <li> <NavLink to='/Careers' onClick={toggleMenu}> <a href="https://gns.tv/jobs">Careers</a> </NavLink> </li> */}
        <li> <NavLink to= '/About'  onClick={toggleMenu}> About Us</NavLink> </li>
        <li>  <a href="https://gns.tv/jobs">Careers</a> </li>
        <li> <NavLink to='/Contact' onClick={toggleMenu} > Contact Us </NavLink> </li>
        <li> <NavLink to='/Login'   onClick={toggleMenu} > Login </NavLink> </li>
      </ul>
    </nav>
    <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path= '/Careers' element={<Careers/>} />
      <Route path= '/About' element={<About/>} />
      <Route path= '/Login' element={<Login/>} />
      <Route path= '/Contact' element={<Contact/>} />
    </Routes>
    </Router>
   
  )
}
