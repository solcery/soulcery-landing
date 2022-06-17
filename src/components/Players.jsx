import React from "react";
import line from "../assets/img/line.png";
import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p2.png";
import p3 from "../assets/img/p3.png";
import p_circle from "../assets/img/p_circle.png";
export const Players = () => {
  return (
    <div className="Players common_width">
      <img src={p_circle} alt="" />
      <h1>For Players</h1>
      <p>These games were made to showcase what Solcery is capable of</p>

      <img src={line} alt="" />

      <div className="lists">
        <div className="list">
          <img src={p1} alt="" />
          <div className="box">
            <h1>SUMMONER</h1>
            <p>
              Easy-to-learn PvP deck-building game, where players acquire coins,
              buy new creatures from a shared pool of cards, and summon them to
              slay the opponent.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={p2} alt="" />
          <div className="box">
            <h1>SOLITARY</h1>
            <p>
              Single-player roguelike deckbuilder that takes you for an
              adventure through a dungeon teeming with monsters and otherworldly
              threats. Bring your NFTs.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={p3} alt="" />
          <div className="box">
            <h1>SUMMONER</h1>
            <p>
              Easy-to-learn PvP deck-building game, where players acquire coins,
              buy new creatures from a shared pool of cards, and summon them to
              slay the opponent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
