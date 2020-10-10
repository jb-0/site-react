import React, { useContext } from 'react';
import Card from './Card';
import portfolioContent from '../../content/portfolioContent';
import '../../styles/Portfolio.css';
import { ViewContext } from '../../context/ViewContext';

function Portfolio() {
  const size = useContext(ViewContext);
  
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div
        className={
          size.width > 440
            ? 'portfolio-cards-section'
            : 'portfolio-cards-section mobile'
        }
      >
        {portfolioContent.map((portfolioItem, key) => {
          return <Card key={key} item={portfolioItem} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
