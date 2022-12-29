import React from 'react'
import me from "../../assests/Femi.jpg"

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='.container aboout__container'>
        <div className='about__me'>
            <div className='about__me-image'>
            <img src = {me} />
            </div>
        </div>
        <div className='about__content'></div>
    </div>

    </section>
  )
}

export default About
