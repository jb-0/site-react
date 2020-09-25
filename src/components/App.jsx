import React from "react";
import Header from "./Header";
import Intro from "./Intro"
import Card from "./Card";
import Footer from "./Footer";
import portfolioContent from "../content/portfolioContent";

function App() {
  return (
    <div class="app-div">
      <Header />
      <Intro />
      <div class="cards-section">
        {portfolioContent.map((portfolioItem) => {
          return <Card item={portfolioItem} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
