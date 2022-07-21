import players1 from "../assets/img/players/1.webp";
import players2 from "../assets/img/players/2.webp";
import players3 from "../assets/img/players/3.webp";

export const Players = () => {
  return (
    <div className="Players common_width">
      <h1>For Players</h1>
      <p>These games were made to showcase what Solcery is capable of</p>
      <div className="lists">
        <div className="list">
          <img src={players1} alt="" />
          <div className="box">
            <h1>True interoperability</h1>
            <p>
              argarg asdfgasd gasrg awegas dgasrgawerg ar garg arg aer.arsg aerga rgasdrg.aerg arg aerga rg a.er gasdfgsnjhwrthwerth. wrtheryheryt jweryjrytjwrtjwrtjwrt.jw rtjwrt jwrt.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={players2} alt="" />
          <div className="box">
            <h1>True ownership and governance</h1>
            <p>
              argarg asdfgasd gasrg awegas dgasrgawerg ar garg arg aer.arsg aerga rgasdrg.aerg arg aerga rg a.er gasdfgsnjhwrthwerth. wrtheryheryt jweryjrytjwrtjwrtjwrt.jw rtjwrt jwrt.
            </p>
          </div>
        </div>
        <div className="list">
          <img src={players3} alt="" />
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
