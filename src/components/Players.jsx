import React from "react";
import p_circle from "../assets/img/decor/p_circle.png";
import p1 from "../assets/img/players/1.webp";
import p2 from "../assets/img/players/2.webp";
import p3 from "../assets/img/players/3.webp";

export const Players = () => {
  return (
    <div className="Players common_width">
      {/* <img src={p_circle} alt="" style = {{zIndex: -100}}/> */}
      
      <h1>For Players</h1>

      <p>These games were made to showcase what Solcery is capable of</p>

      <div className="lists">
        <div className="list">
          <img src={p1} alt="" />
          <div className="box">
            <h1>True interoperability</h1>
            <p>
              argarg asdfgasd gasrg awegas dgasrgawerg ar garg arg aer.arsg aerga rgasdrg.aerg arg aerga rg a.er gasdfgsnjhwrthwerth. wrtheryheryt jweryjrytjwrtjwrtjwrt.jw rtjwrt jwrt.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={p2} alt="" />
          <div className="box">
            <h1>True ownership and governance</h1>
            <p>
            argarg asdfgasd gasrg awegas dgasrgawerg ar garg arg aer.arsg aerga rgasdrg.aerg arg aerga rg a.er gasdfgsnjhwrthwerth. wrtheryheryt jweryjrytjwrtjwrtjwrt.jw rtjwrt jwrt.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={p3} alt="" />
          <div className="box">
            <h1>E-sports ready</h1>
            <p>
            argarg asdfgasd gasrg awegas dgasrgawerg ar garg arg aer.arsg aerga rgasdrg.aerg arg aerga rg a.er gasdfgsnjhwrthwerth. wrtheryheryt jweryjrytjwrtjwrtjwrt.jw rtjwrt jwrt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
