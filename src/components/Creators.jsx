import React from "react";
import c_circle from "../assets/img/decor/c_circle.png";
import cr1 from "../assets/img/creators/1.webp";
import cr2 from "../assets/img/creators/3.webp";
import cr3 from "../assets/img/creators/2.webp";

export const Creators = () => {
  return (
    <div className="creators common_width">
      {/* <img src={c_circle} alt="" style = {{ zIndex: -100}}/> */}

      <h1>For Creators</h1>

      <p>Work together with game creators and NFT communities</p>
      
      <div className="lists">
        <div className="list">
          <img src={cr1} alt=""  />
          <div className="box">
            <h1>From idea to players in days</h1>
            <p>
              Solcery comes with an intuitive visual programming node editor
              that allows you to rapidly prototype, expand, and edit your game
              logic...fast deploys...
            </p>
          </div>
        </div>
        <div className="list">
          <img src={cr3} alt=""  />
          <div className="box">
            <h1>Solana as an endless source of creativity</h1>
            <p>
              NFT integration, fast support and iteration, instant access to communities, community-driven development, bottom-up approach
            </p>
          </div>
        </div>
        <div className="list">
          <img src={cr2} alt=""  />
          <div className="box">
            <h1>Your game - your rules</h1>
            <p>
              Self-governed, monetize the way you want, no monopolies, restrictions, sustainable non-predatory free2play, open for modding, truly on-chain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
