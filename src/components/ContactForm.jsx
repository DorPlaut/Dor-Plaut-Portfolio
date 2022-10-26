import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xxkg0eo',
        'template_4r0w2d1',
        form.current,
        'NeOnsSDZoqOO_Y6za'
      )
      .then(
        (result) => {
          alert('Message sent successfully');
        },
        (error) => {
          console.log(error.text);
          alert('Error. please go back');
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="form-input"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="form-input"
          required
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="7"
          className="form-input"
          required
        ></textarea>
        <button className="btn send-btn" type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
