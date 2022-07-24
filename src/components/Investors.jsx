import cultur3 from "../assets/img/investors/Cultur3.webp";
import sino from "../assets/img/investors/Sino.webp";
import solana from "../assets/img/investors/Solana.webp";

export const Investors = () => {
    return (
        <div className="Investors common_width" id = "investors">
            <h1>Investors</h1>
            <p>
                We are honoured to be backed and adviced by these powerhouses. They have been of an immense help and an endless source of knowledge, feedback and experience in our journey so far.
            </p>

            <div className="Investor_pics">
                <img src={cultur3} alt="" />
                <img src={sino} alt="" />
                <img src={solana} alt="" />
            </div>
        </div>
    );
};