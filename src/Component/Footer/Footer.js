import React from 'react'
import "./footer.css"
import {ImFacebook} from "react-icons/im";
import {GrInstagram} from "react-icons/gr";
import {ImTwitter} from "react-icons/im"

const Footer = () => {
  return (
    <section id='footer'>
      <a href ="#" className='footer__logo'>ALPHATECH</a>
        <ul className='sectionlinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
        
        </ul>
        <div className='footer__socials'>
            <a href='https://web.facebook.com/oluwafemi.gbadero.9'> <ImFacebook className='socialIcon'/></a>
            <a href='https://www.instagram.com/oluwafemigbadero/'> <GrInstagram className='socialIcon'/></a>
            <a href='https://twitter.com/GBADEROOluwafe1'> <ImTwitter className='socialIcon'/></a>
        </div>

        <div className='footer__copyright'>
            <small>&copy; ALPHATECH. All right reserved.</small>
        </div>
    
      </section> 
  )
}

export default Footer
