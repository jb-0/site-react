import React, { useContext, useEffect } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { ViewContext } from '../../context/ViewContext';
import '../../styles/Card.css';
import { v4 as uuidv4 } from 'uuid';

function Card(props) {
  const size = useContext(ViewContext);

  // For a given portfolio item a combination of links can be included, this
  // function ensures a corresponding icon is returned, with a catch all "Link"
  function getIcon(linkName) {
    if (linkName === 'site') {
      return (
        <LanguageIcon
          className="card-link-icon"
          htmlColor="white"
          fontSize="large"
        />
      );
    } else if (linkName === 'demo') {
      return (
        <YouTubeIcon
          className="card-link-icon"
          htmlColor="white"
          fontSize="large"
        />
      );
    } else if (linkName === 'source') {
      return (
        <GitHubIcon
          className="card-link-icon"
          htmlColor="white"
          fontSize="large"
        />
      );
    } else {
      return 'Link';
    }
  }

  function handleClick(event) {
    // If the card is already selected then collapse it, otherwise set it as the selected card
    if (parseInt(props.selectedCardId, 10) === props.id) {
      props.setSelectedCardId(undefined);
    } else {
      props.setSelectedCardId(event.target.id);
    }
  }

  return (
    <div
      className={parseInt(props.selectedCardId, 10) === props.id ? 
      'card-item selected-portfolio-item' : 'card-item'}
    >
      <h3>{props.item.title}</h3>
      <p>{props.item.content}</p>
      <button
        id={props.id}
        onClick={handleClick}
        className={
          size.width > 440 ? 'read-more-button' : 'read-more-button-mobile'
        }
      >
        Read More
      </button>
      <div className="card-links">
        {Object.keys(props.item.links).map((key, index) => {
          const link = props.item.links[key];
          const linkName = key;

          return (
            <span key={uuidv4} className="card-link">
              <a href={link}>{getIcon(linkName)}</a>{' '}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default Card;
