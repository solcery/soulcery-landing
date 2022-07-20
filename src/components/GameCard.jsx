import React from "react";

export const GameCard = ({ img, heading, para }) => {
  return (
    <div className="GameCard">
      <img src={img} alt="" />
      <div className="presentation">
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};
