import React from 'react';
import '../../styles/DetailedPortfolioItem.css'
import Cancel from '@material-ui/icons/Cancel';

function DetailedPortfolioItem(props) {
  function handleCancelClick () {
    props.setSelectedCardId(undefined);
  }

  return (
    <div className="blurred-background-container">
      <div className="detailed-portfolio-item-container">
        <Cancel
            id="close-detailed-item-btn"
            className="card-link-icon"
            htmlColor="black"
            fontSize="large"
            onClick={handleCancelClick}
          />
        <h3>{props.item.title}</h3>
        <p>{props.item.shortContent}</p>
        {props.item.content}
      </div>
    </div>
  );
}

export default DetailedPortfolioItem;
