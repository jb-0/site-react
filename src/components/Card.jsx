import React from 'react';

function Card(props) {
  return (
    <div>
      <h2>{props.item.title}</h2>
      <p>{props.item.content}</p>
      
      {Object.keys(props.item.links).map((key, index) => {
        return (<span><a href={props.item.links[key]}>{key}</a>{'  '}</span>)
      })}
      
    </div>
  );
}
export default Card;
