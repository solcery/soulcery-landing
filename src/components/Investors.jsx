import cultur3 from "../assets/img/investors/Cultur3.webp";
import sino from "../assets/img/investors/Sino.webp";
import solana from "../assets/img/investors/Solana.webp";

export const Investors = () => {
    return (
        <div className="Investors common_width" id="investors">
            <h1>Investors</h1>
            <p>
                We are honoured to be backed and adviced by these powerhouses. They have been of an immense help and an endless source of knowledge, feedback and experience in our journey so far.
            </p>

            <div className="Investor_pics">
                <a href='https://www.cultur3.capital' target="_blank" rel="noopener noreferrer"><img src={cultur3} alt="" /></a>
                <a href='https://www.sinoglobalcapital.com' target="_blank" rel="noopener noreferrer"><img src={sino} alt="" /></a>
                <a href='https://solana.com' target="_blank" rel="noopener noreferrer"><img src={solana} alt="" /></a>
            </div>
        </div>
    );
};