import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-name'>
            <a href="https://github.com">github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio