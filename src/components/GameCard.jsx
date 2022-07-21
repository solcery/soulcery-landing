import React from "react";

export const GameCard = ({ img, heading, description }) => {
  return (
    <div className="GameCard">
      <img src={img} alt="" />
      <div className="presentation">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
