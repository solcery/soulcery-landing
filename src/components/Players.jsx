import React from "react";
// import line from "../assets/img/line.png";
import p1 from "../assets/img/players/1.webp";
import p2 from "../assets/img/players/2.webp";
import p3 from "../assets/img/players/3.webp";
import p_circle from "../assets/img/p_circle.png";
export const Players = () => {
  return (
    <div className="Players common_width">
      {/* <img src={p_circle} alt="" style = {{zIndex: -100}}/> */}
      <h1>For Players</h1>
      <p>These games were made to showcase what Solcery is capable of</p>

      {/* <img src={line} alt="" /> */}

      <div className="lists">
        <div className="list">
          <img src={p1} alt="" />
          <div className="box">
            <h1>True interoperability</h1>
            <p>

            </p>
          </div>
        </div>
        <div className="list">
          <img src={p2} alt="" />
          <div className="box">
            <h1>True ownership and governance</h1>
            <p>
              Both assets and the ecosystem itself
            </p>
          </div>
        </div>
        <div className="list">
          <img src={p3} alt="" />
          <div className="box">
            <h1>E-sports ready</h1>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
