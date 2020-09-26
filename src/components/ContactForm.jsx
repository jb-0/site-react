import React from "react";

function ContactForm() {
  return (
    <form class="contact-form" action="">
      <label for="name">Name{" "}</label><br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name.."
        className="text-input"
      ></input><br /><br />

      <label for="email">Email{" "}</label><br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email.."
        className="text-input"
      ></input><br /><br />
      
      <label for="message"><span>Message{" "}</span></label><br />
      <textarea
        id="message"
        name="message"
        placeholder="Write something.."
        className="text-input"
      ></textarea><br /><br />

      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default ContactForm;
