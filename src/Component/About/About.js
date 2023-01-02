import React from 'react'
import me from "../../assests/Femi.jpg"
import {FaAward} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import "./about.css"

const About = () => {
  return (
<section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='.container about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
                <img src = {me} />
            </div>
        </div>
        <div className='about__content'>
            <div className='about__cards'>
                <article className='about__card'>
                    <FaAward className='about__icons'/>
                    <h5>Experience</h5>
                    <small>2+ Years Working</small>
                </article>

                <article className='about__card'>
                        <FiUser className='about__icons'/>
                        <h5>Clients</h5>
                        <small>10+ clients worldwide</small>
                </article>

                <article className='about__card'>
                    <VscFolderLibrary className='about__icons'/>
                    <h5>Project</h5>
                    <small>100+ completed</small>
                </article>
            </div>
            <p> I am a front end developer who is more profieciency in creating an attraactive, flexible and well functioning </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    </div>

    </section>
  )
}

export default About
