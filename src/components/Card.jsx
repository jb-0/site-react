import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "../styles/Card.css"

function Card(props) {
  // For a given portfolio item a combination of links can be included, this
  // function ensures a corresponding icon is returned, with a catch all "Link"
  // TODO: Move to component????
  function getIcon(linkName) {
    if (linkName === "site") {
      return <LanguageIcon className="card-link-icon" htmlColor="white" fontSize="large" />;
    } else if (linkName === "demo") {
      return <YouTubeIcon className="card-link-icon" htmlColor="white" fontSize="large" />;
    } else if (linkName === "source") {
      return <GitHubIcon className="card-link-icon" htmlColor="white" fontSize="large" />;
    } else {
      return "Link";
    }
  }

  return (
    <div className="card-item">
      <h3>{props.item.title}</h3>
      <p>{props.item.content}</p>
      <div className="card-links">
        {Object.keys(props.item.links).map((key, index) => {
          const link = props.item.links[key];
          const linkName = key;

          return (
            <span className="card-link">
              <a href={link}>{getIcon(linkName)}</a>{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default Card;
