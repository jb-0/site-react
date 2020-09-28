import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
