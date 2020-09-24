import React from 'react';
import Card from './Card';
import portfolioContent from '../content/portfolioContent';

function App() {
  return (
    <div>
    {portfolioContent.map((portfolioItem) => {
      return <Card item={portfolioItem}/>
    })}
    </div>
  );
}

export default App;
