import React from "react";

export const TeamMember = ({ img, heading, para }) => {
  return (
    <div className="TeamMember">
      <img src={img} alt="" />
      <div className="presentation">
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};
