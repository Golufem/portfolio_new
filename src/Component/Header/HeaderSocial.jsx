import React from 'react';
import {GrLinkedin} from 'react-icons/gr';
import {BsGithub} from "react-icons/bs";
import {FiDribbble} from "react-icons/fi"

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https:linkedln.com' target="_blank"><GrLinkedin/></a>
      <a href='https:github.com' target="_blank"> <BsGithub/></a>
      <a href='https:dribble.com' target="_blank"><FiDribbble/></a>
    </div>
  );
}

export default HeaderSocial;
