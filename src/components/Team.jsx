import React from "react";

export const Team = ({ img, heading, para }) => {
  return (
    <div className="Team">
      <img src={img} alt="" />
      <div className="presentation">
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};
