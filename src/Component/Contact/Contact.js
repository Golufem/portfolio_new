import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {MdOutlineEmail} from "react-icons/md";
import {BiMessageRoundedDots} from "react-icons/bi";
import {RiWhatsappFill} from "react-icons/ri";
import "./Contact.css"








const Contact = () => {
  
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u5jbijz', 'template_o73pa5j', form.current, '5xvPIucdHfCzml9RV');
        e.target.reset()
          
      };
    
  
  
  
  
  
    return (
    <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__option'>
                    <MdOutlineEmail className='contactOption__icon'/>
                    <h4>Email</h4>
                    <h5>oluwafemigbadero@gmail.com</h5>
                    <a href='mailto:oluwafemigbadero@gmail.com' target= "_blank">send a message</a>
                </article>

                <article className='contact__option'>
                    <BiMessageRoundedDots className='contactOption__icon'/>
                    <h4>Messenger</h4>
                    <h5>Oluwafemigbadero</h5>
                    <a href='https://m.me/oluwafemi.gbadero.9' target= "_blank">send a message</a>
                </article>

                <article className='contact__option'>
                    <RiWhatsappFill className='contactOption__icon'/>
                    <h4>Whatsapp</h4>
                    <h5>+2349068055248</h5>
                    <a href='https://wa.me/09068055248' target= "_blank">send a message</a>
                </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <input type= "text" name = "name" placeholder= "Enter Your Full Name" required></input>
              <input type = "email" name = "email" placeholder='Enter your gmail' required></input>
              <textarea name='message' rows="7" placeholder='Type your message here' required></textarea>
              <button className='btn btn-primary'> Send Message </button>
            </form>
        
        </div>
    </section>
  )
}

export default Contact
