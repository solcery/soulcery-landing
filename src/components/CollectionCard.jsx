import React from "react";
import eth from "../assets/img/eth.svg";
export const CollectionCard = ({ img, heading }) => {
  return (
    <div className="MadeSolceryCard CollectionCard">
      <img src={img} alt="" />
      <div className="presentation">
        <div className="top_area">
          <p>Polygonpnks-office...</p>
          <p>6 day left</p>
        </div>
        <div className="bottom_area">
          <h1>{heading}</h1>
          <p>
            <img src={eth} alt="" />
            0.87777
          </p>
        </div>
      </div>
    </div>
  );
};
