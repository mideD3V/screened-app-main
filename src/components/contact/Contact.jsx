import React, { useRef } from 'react'
import './contact.css'
import emailjs from "@emailjs/browser";
import Hero from '../Hero';
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <section id="contact">
      <div className="hero-contact">
        <Hero title='CONTACT US'/>
      </div>
      <form ref={form} onSubmit={sendEmail}>
<h2>Connect <span className="redfont">with us today</span></h2>
        <input type="text" name="user_name" placeholder='Name' />
        <input type="email" name="user_email" placeholder='Email'/>
        <textarea name="message" rows={10} cols='10' placeholder='Enter your message here'/>
        <button type="submit" value="Send" className='primary-btn'>Send</button>
      </form>
    </section>
  );
}

export default Contact