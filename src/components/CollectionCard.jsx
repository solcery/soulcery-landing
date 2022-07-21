import React from "react";

export const CollectionCard = ({ img, heading }) => {
  return (
    <div className="CollectionCard">
      <img src={img} alt=""/>
      <div className="presentation">
        <div className="bottom_area">
          <h1>{heading}</h1>
        </div>
      </div>
    </div>
  );
};
