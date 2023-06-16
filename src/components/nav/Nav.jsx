import React from 'react'
import './nav.css'
import {AiFillHome,AiFillBook,AiFillMessage} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"onClick={()=> setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={()=> setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href="#portfolio"onClick={()=> setActiveNav ('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillBook /></a>
      <a href="#contact" onClick={()=> setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
)}

export default Nav
