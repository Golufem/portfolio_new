import React from 'react';
import CV from"../../assests/CV.docx"
const CallToAction = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-primary'> Download CV</a>
      <a href='#contact' className='btn'> Let's Talk</a>
    </div>
  );
}

export default CallToAction;
