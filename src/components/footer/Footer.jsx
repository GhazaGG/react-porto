import React from 'react'
import './footer.css'
import {RiWhatsappFill} from 'react-icons/ri'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ghaza</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact"></a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/ghazagg/"><AiFillInstagram /></a>
        <a href="https://wa.me/+628975825128"><RiWhatsappFill /></a>
        <a href="https://twitter.com/ghazagg7"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; GhazaGG</small>
      </div>
    </footer>
  )
}

export default Footer