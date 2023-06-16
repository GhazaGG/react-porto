import React from 'react'
import './header.css'
import CTA from './CTA'
import Avatar from '../../assets/avatar.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ghaza G</h1>
        <h5 className='text-ligth'>Junior Front-end Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Avatar} alt="foto" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header