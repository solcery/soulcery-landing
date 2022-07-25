import React from "react";
import cr1 from "../assets/img/creators/1.webp";
import cr2 from "../assets/img/creators/3.webp";
import cr3 from "../assets/img/creators/2.webp";

export const Creators = () => {
  return (
    <div className="creators common_width" id="creators">

      <h1>For Creators</h1>

      <p>Effortlessly create alongside with other game developers and NFT communities</p>
      
      <div className="lists">
        <div className="list">
          <img src={cr1} alt="" />
          <div className="box">
            <h1>From idea to players in days</h1>
            <p>
              Solcery comes with a set of intuitive and easy-to-use tools for visual programming and content management. They allow you to rapidly prototype your game logic, quickly integrate any NFT collections, fine-tune the game settings and instantly deploy a build for your players.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={cr3} alt="" />
          <div className="box">
            <h1>Endless source of creativity</h1>
            <p>
              Solcery follows a bottom-up content creation approach, allowing games to utilize Solana as one of the biggest decentralized art databases in the world, and a community-driven game development approach, allowing groups of any size and background to make games together.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={cr2} alt="" />
          <div className="box">
            <h1>Game mastery</h1>
            <p>
              Only you as the creator and your players own, shape, and govern your game. No external publishers, nonsense restrictions, or platform dictatorship stand between the game and its community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
