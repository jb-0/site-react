import React, { useContext, useState } from 'react';
import Card from './Card';
import DetailedPortfolioItem from './DetailedPortfolioItem';
import portfolioContent from '../../content/portfolioContent';
import '../../styles/Portfolio.css';
import { ViewContext } from '../../context/ViewContext';
import { v4 as uuidv4 } from 'uuid';

function Portfolio() {
  const size = useContext(ViewContext);
  const [selectedCardId, setSelectedCardId] = useState();
  
  // When a card is selected we want to prevent scroll on background
  if (selectedCardId) {
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.height = null;
    document.body.style.overflowY = null;
  }

  return (
    <div className={`portfolio ${selectedCardId ? 'detailed-portfolio-open' : ''}`} 
     id="portfolio">
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
      {selectedCardId && (
        <DetailedPortfolioItem
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          item={portfolioContent[selectedCardId]}
        />
      )}
    </div>
  );
}

export default Portfolio;
