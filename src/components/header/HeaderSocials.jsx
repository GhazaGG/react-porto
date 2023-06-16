import React from 'react'
import {AiFillLinkedin ,AiFillGithub ,AiFillInstagram} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target='_blank'><AiFillLinkedin /></a>
      <a href="https://github.com" target='_blank'><AiFillGithub /></a>
      <a href="https://www.instagram.com/ghazagg/"><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials