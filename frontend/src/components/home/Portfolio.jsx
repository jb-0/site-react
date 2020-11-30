import React, { useContext, useState } from 'react';
import Card from './Card';
import portfolioContent from '../../content/portfolioContent';
import '../../styles/Portfolio.css';
import { ViewContext } from '../../context/ViewContext';
import { v4 as uuidv4 } from 'uuid';

function Portfolio() {
  const size = useContext(ViewContext);
  const [selectedCardId, setSelectedCardId] = useState();

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div
        className={
          size.width > 440
            ? 'portfolio-cards-section'
            : 'portfolio-cards-section portfolio-cards-section-mobile'
        }
      >
        {portfolioContent.map((portfolioItem, key) => {
          return (
            <Card
              item={portfolioItem}
              id={key}
              key={uuidv4()}
              selectedCardId={selectedCardId}
              setSelectedCardId={setSelectedCardId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
