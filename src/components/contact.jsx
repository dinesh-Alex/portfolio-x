import React, { useState } from 'react';
import '../components/mediaq.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_utw9xwy', 'template_nxob41c', e.target, 'ivgA2-C762XnZNdpq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="con">
    <form className="contact-form" id="contact" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Send</button>
    </form></div>
  );
};

export default ContactForm;