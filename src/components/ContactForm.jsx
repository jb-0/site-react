import React from "react";

function ContactForm() {
  return (
    <form class="contact-form" action="action_page.php">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      ></input><br></br>

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      ></input><br></br>
      
      <label for="subject"><span>Subject</span></label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
      ></textarea>

      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default ContactForm;
