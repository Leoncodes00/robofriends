import React from "react";
import "tachyons";
import "./Card.css";

const Card = props => {
  const { id, name, email } = props.robot;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" className="robot" src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
