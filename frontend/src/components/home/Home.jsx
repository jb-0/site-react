import React from "react";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div className="home">
      <Intro />
      <Portfolio />
      <ContactForm />
    </div>
  );
}

export default Home;
