import React, { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  const [formText, setFormText] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleUpdates(event) {
    const target = event.target.name;
    const value = event.target.value;
    
    setFormText((previousValues) => {
      return {...previousValues, [target]: value}
    });

    console.log(formText);
    console.log(value);
  }

  return (
    <div className="contact-form" id="contact">
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

        <input type="submit" value="Submit" className="submit-button"></input>
      </form>
    </div>
  );
}

export default ContactForm;
