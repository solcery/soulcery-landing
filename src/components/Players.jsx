import players1 from "../assets/img/players/1.webp";
import players2 from "../assets/img/players/2.webp";
import players3 from "../assets/img/players/3.webp";

export const Players = () => {
  return (
    <div className="Players common_width" id="players">
      <h1>For Players</h1>
      <p>Dive into the new era of fun, game governance and game asset ownership</p>
      <div className="lists">
        <div className="list">
          <img src={players1} alt="" />
          <div className="box">
            <h1>True interoperability</h1>
            <p>
              All the assets the players own can be used as in-game entities across any Soulcery games, acquiring game mechanics unique to each of them. Your favorite NFT will become a rare card in one game, a playable character in another one, or a powerful spell in the third.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={players2} alt="" />
          <div className="box">
            <h1>Ownership and governance</h1>
            <p>
              Players are not only the blood and bones of Soulcery. They are its owners, rulers, and moderators, making decisions on the future of both the entire protocol and any individual game on it.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={players3} alt="" />
          <div className="box">
            <h1>E-sports ready</h1>
            <p>
              Due to the permissionless and trustless nature of on-chain gaming, all the competitions can be organized and held without any centralized authority. Games results are easily verifiable, and the rewards distribution is transparent to all the participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
