import React from 'react'
import './about.css'
import ME from '../../assets/computer.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about_card'></article>
          </div> 
          <div className='desc__container'>
            <h1>A Dedicated Front-end Developer based in Indonesia 📍</h1>
            <p>
            Hello, I'm ghaza, now I'm in my second year as an informatics engineering student. I have great interest in front-end development. As a junior Front-End Developer, i possess an impresive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About