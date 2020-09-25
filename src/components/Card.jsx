import React from "react";

function Card(props) {
  return (
    <div class="card-item">
      <h3>{props.item.title}</h3>
      <p>{props.item.content}</p>

      {Object.keys(props.item.links).map((key, index) => {
        const link = props.item.links[key];
        let linkName = key;

        return (
          <span class="card-link">
            <a href={link}>{linkName}</a>{" "}
          </span>
        );
      })}
    </div>
  );
}
export default Card;
