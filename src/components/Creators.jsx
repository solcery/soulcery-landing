import React from "react";
// import line from "../assets/img/line.png";
import cr1 from "../assets/img/cr1.png";
import cr2 from "../assets/img/cr2.png";
import cr3 from "../assets/img/cr3.png";
import c_circle from "../assets/img/c_circle.png";
export const Creators = () => {
  return (
    <div className="Createors common_width">
      <img src={c_circle} alt="" style = {{ zIndex: -100}}/>
      <h1>For Creators</h1>
      <p>Work together with game creators and NFT communities</p>

      {/* <img src={line} alt="" /> */}

      <div className="lists">
        <div className="list">
          <img src={cr1} alt="" />
          <div className="box">
            <h1>Construct game logic with ease</h1>
            <p>
              Solcery comes with an intuitive visual programming node editor
              that allows you to rapidly prototype, expand, and edit your game
              logic
            </p>
          </div>
        </div>
        <div className="list">
          <img src={cr2} alt="" />
          <div className="box">
            <h1>Edit and test your game in a matter of seconds</h1>
            <p>
              Solcery Editor is web-based and does not require any external
              building or redeployment for any changes you make to take effect
            </p>
          </div>
        </div>
        <div className="list">
          <img src={cr3} alt="" />
          <div className="box">
            <h1>Design your project the way you want</h1>
            <p>
              The modular approach to content management allows you to start
              using any combination of pre-made templates quickly or even create
              your own
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
