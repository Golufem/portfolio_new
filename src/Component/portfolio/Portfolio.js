import React from 'react';
import "./portfolio.css"
import foodapp from "../../assests/foodapp.PNG"
import INEC from "../../assests/inec site.PNG"
import Login from "../../assests/login app.PNG"
import naism from "../../assests/naism site.PNG"

const data = [{
  id: 1,
  image: foodapp,
  title:'This is a food ordering application',
  github:'https://github.com/Golufem/Food-App',
  demo:'https://golufem.github.io/Food-App/',
},
{
  id: 2,
  image: INEC,
  title:'This is an inec cloned site',
  github:'https://github.com/Golufem/inec_cloned',
  demo:'https://golufem.github.io/inec_cloned/',

},
{
  id: 3,
  image: Login,
  title:'This is a typical login page',
  github:'https://github.com/Golufem/A-Typical-Login-Page',
  demo:'https://golufem.github.io/A-Typical-Login-Page/',

}, 

{
  id: 4,
  image: naism,
  title:'This is a portfolio of naism site cloned',
  github:'https://github.com/Golufem/NAISM_Site_Cloned',
  demo:'https://golufem.github.io/NAISM_Site_Cloned/',

}, 

]





const Portfolio = () => {
  return (
    <section id='portfolio'> 
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio__container'>

        {
          data.map(({id, image,title,github,demo})=>{
            return(
              <article id= {id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image}/>
              </div>
              <h3>{title} </h3>
              <a href={github} className='btn git' target="_blank"> Github</a>
          
              <a href={demo} className='btn btn-primary' target="_blank"> Live Demo</a>

          
          </article>
            )
          })
        }
           
          

         
        
        </div>
      
    </section>
  )
}

export default Portfolio
