import React from 'react';
import './CSS/Contact.css'
const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>Email: Bernard20otieno01@gmail.com</p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/bernard-otieno-5b441124b/">Bernard Otieno</a>
      </p>
      <h3>Where I am Based at</h3>
      <iframe
        title="My Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.776594177892!2d36.80994100915223!3d-1.309324535643314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112e9eff4827%3A0x17a918597484c8ea!2sStrathmore%20University!5e0!3m2!1sen!2ske!4v1685956819312!5m2!1sen!2ske"
        width="70%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <figcaption className="figure-caption text-end">View my location</figcaption>
    </section>
  );
};

export default Contact;
