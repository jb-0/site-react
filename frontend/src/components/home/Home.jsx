import React from "react";
import Navbar from "../common/Navbar";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import Footer from "../common/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Intro />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
