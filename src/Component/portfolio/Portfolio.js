import React from 'react';
import "./portfolio.css"
import foodapp from "../../assests/foodapp.PNG"
import INEC from "../../assests/inec site.PNG"
import Login from "../../assests/login app.PNG"
import naism from "../../assests/naism site.PNG"
const Portfolio = () => {
  return (
    <section id='portfolio'> 
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={foodapp}/>
                </div>
                <h3>This is a food ordering application</h3>
                <a href='https://github.com/Golufem/Food-App' className='btn git' target="_blank"> Github</a>
            
                <a href='https://golufem.github.io/Food-App/' className='btn btn-primary' target="_blank"> Live Demo</a>

            
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={INEC}/>
                </div>
                <h3>This is a portfolio for Inec cloned site</h3>
                <a href='https://github.com/Golufem/inec_cloned' className='btn git ' target="_blank"> Github</a>
            
                <a href='https://golufem.github.io/inec_cloned/' className='btn btn-primary' target="_blank"> Live Demo</a>

            
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={Login}/>
                </div>
                <h3>This is a portfolio of typical login page</h3>
                <a href='https://github.com/Golufem/A-Typical-Login-Page' className='btn  git' target="_blank"> Github</a>
            
                <a href='https://golufem.github.io/A-Typical-Login-Page/' className='btn btn-primary' target="_blank"> Live Demo</a>

            
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={naism}/>
                </div>
                <h3>This is a portfolio of Naism site cloned </h3>
                <a href='https://github.com/Golufem/NAISM_Site_Cloned' className='btn git' target="_blank"> Github</a>
            
                <a href='https://golufem.github.io/NAISM_Site_Cloned/' className='btn btn-primary' target="_blank"> Live Demo</a>

            
            </article>
        
        </div>
      
    </section>
  )
}

export default Portfolio
