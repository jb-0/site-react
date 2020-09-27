import React from "react";
import Card from "./Card";
import portfolioContent from "../content/portfolioContent";
import "../styles/Portfolio.css"

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-cards-section">
        {portfolioContent.map((portfolioItem, key) => {
            return <Card key={key} item={portfolioItem} />;
        })}
        </div>
    </div>
  );
}

export default Portfolio;
