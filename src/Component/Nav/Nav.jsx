import React, {useState} from 'react';
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from "react-icons/ai";
import {BiBookContent} from "react-icons/bi";
import {AiFillFolderOpen} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai"

const Nav = () => {
 const [navActive, setNavActive]  = useState('#');
 const changeActiveClasshome = ()=>(
    setNavActive('#')
 );
 const changeActiveClassabout= ()=>(
    setNavActive('#about')
 );
 const changeActiveClassexperience= ()=>(
    setNavActive('#experience')
 );
 const changeActiveClassservices= ()=>(
    setNavActive('#portfolio')
 );
 const changeActiveClasscontact= ()=>(
    setNavActive('#contact')
 );


  return (
    <nav>
      <a href='#' onClick={changeActiveClasshome} className={navActive === '#'? 'active' : ""}><AiOutlineHome/></a>
      <a href = '#about'  onClick={changeActiveClassabout} className={navActive === '#about'? 'active' : ""}><AiOutlineUser/></a>
      <a href = '#experience' onClick={changeActiveClassexperience} className={navActive === '#experience'? 'active' : ""}><BiBookContent/></a>
      <a href = '#portfolio' onClick={changeActiveClassservices} className={navActive === '#portfolio'? 'active' : ""}><AiFillFolderOpen/></a>
      <a href = '#contact' onClick={changeActiveClasscontact} className={navActive === '#contact'? 'active' : ""}><AiOutlineMessage/></a>
    </nav>
  );
}

export default Nav;
