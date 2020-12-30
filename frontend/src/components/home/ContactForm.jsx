import React, { useContext, useState } from 'react';
import '../../styles/Forms.css';
import { ViewContext } from '../../context/ViewContext';

function ContactForm() {
  const size = useContext(ViewContext);
  const [messageSentNotification, setMessageSentNotification] = useState(false);
  const [formText, setFormText] = useState({
    name: '',
    email: '',
    message: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const rawResponse = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        frontend: 'react-frontend',
      },
      body: JSON.stringify(formText),
    });

    // Mark message sent notification as true, this hide the submit button. Set a timeout of 10
    // seconds to mark the notification as false again incase a user wishes to submit another  
    setMessageSentNotification(true);
    setTimeout(() => setMessageSentNotification(false), 10000);
  }

  function handleUpdates(event) {
    const target = event.target.name;
    const value = event.target.value;

    setFormText((previousValues) => {
      return { ...previousValues, [target]: value };
    });
  }

  return (
    <div
      className={
        size.width > 440 ? 'contact-form' : 'contact-form contact-form-mobile'
      }
      id="contact"
    >
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <br />
        <input
          onChange={handleUpdates}
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          className="text-input"
          value={formText.name}
        ></input>
        <br />
        <br />

        <label htmlFor="email">Email </label>
        <br />
        <input
          onChange={handleUpdates}
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          className="text-input"
          value={formText.email}
        ></input>
        <br />
        <br />

        <label htmlFor="message">
          <span>Message </span>
        </label>
        <br />
        <textarea
          onChange={handleUpdates}
          id="message"
          name="message"
          placeholder="Write something.."
          className="text-input"
          value={formText.message}
        ></textarea>
        <br />
        <br />
        {messageSentNotification ? (
          <p>Thanks! I'll be in touch soon.</p>
        ) : (
          <button type="submit" value="Submit" className="submit-button">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
