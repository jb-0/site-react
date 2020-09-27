import React from "react";
import Navbar from "./Navbar"
import Intro from "./Intro"
import Card from "./Card";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import portfolioContent from "../content/portfolioContent";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <div className="cards-section" id="portfolio">
        {portfolioContent.map((portfolioItem) => {
          return <Card item={portfolioItem} />;
        })}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
