import React from 'react';
import "./Header.css";
import CallToAction from './CallToAction';
import Femi from "../../assests/Femi.jpg";
import HeaderSocial from './HeaderSocial';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Oluwafemi Gbadero</h1>
          <h5 className='text-light'>Frontend Developer</h5>
          <CallToAction   />
       
          <HeaderSocial />

          <div className = "me">
            <img src = {Femi} ></img>
          </div>

          <a href='#contact' className='scroll__down'> Scroll down</a>

          
          
        </div>
</header>
  );
}

export default Header;
