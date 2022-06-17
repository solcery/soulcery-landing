import React from "react";

export const MadeSolceryCard = ({ img, heading, para }) => {
  return (
    <div className="MadeSolceryCard">
      <img src={img} alt="" />
      <div className="presentation">
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};
