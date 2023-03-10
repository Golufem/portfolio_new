import React from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>The Skils I have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
        <div className='frontend'>
        <h3>Frontend Development</h3>
            <div className='experience__content'>
               
            
             <article className='experience__detail'>
                    <BsFillPatchCheckFill className='experience-icon'/>
                    <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>

                    </div>
                </article>

                <article className='experience__detail'>
                    <BsFillPatchCheckFill className='experience-icon'/>
                     <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
        
                     </div>
                </article>

                <article className='experience__detail'>
                    <BsFillPatchCheckFill className='experience-icon'/>
                    <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>

                    </div>
                </article>

                <article className='experience__detail'>
                    <BsFillPatchCheckFill className='experience-icon'/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
        
                        </div>
                </article>
                <article className='experience__detail'>
                    <BsFillPatchCheckFill className='experience-icon'/>
                    <div>
                        <h4>React</h4>
                        <small className='text-light'>Intermediate</small>

                    </div>
                </article>
            
            </div>
        
        </div>   
    
    
    </div>
      
    </section>
  )
}

export default Experience
