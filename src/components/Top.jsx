import logo from "../assets/img/header/logo.webp";
import header_button from "../assets/img/header/header_button.png";

export const Top = ({ gitbook, discord, twitter, medium, github }) => {
    return (
        <div className="Top">
            <header className="common_width">
                <img src={logo} alt="" />
                <nav>
                    <li>
                        <a href="https://docs.soulcery.xyz" target="_blank" rel="noreferrer">
                            <img style={{ display: "block", width: "100%" }} src={gitbook} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.com/invite/Yk9GEpPTA7" target="_blank" rel="noreferrer">
                            <img style={{ display: "block", width: "100%" }} src={discord} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/SoulceryGames" target="_blank" rel="noreferrer">
                            <img style={{ display: "block", width: "100%" }} src={twitter} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@solcery" target="_blank" rel="noreferrer">
                            <img style={{ display: "block", width: "100%" }} src={medium} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/solcery" target="_blank" rel="noreferrer">
                            <img style={{ display: "block", width: "100%" }} src={github} alt="" />
                        </a>
                    </li>
                </nav>
            </header>

            <main className="common_width">
                <div className="presentation">
                    <h2>Zero-code</h2>
                    <h1>Game Engine</h1>
                    <h3>powered by Solana</h3>
                    <p>
                        Create truly decentralized, open-source, community-driven games interoperable with any NFT collection on Solana
                    </p>
                    <button>
                        <a href="https://play.solcery.xyz" target="_blank" rel="noreferrer">
                            <img src={header_button} alt="" />
                        </a>
                    </button>
                </div>

                <div className="box_wrapper">
                    <p>
                        Soulcery is a zero-code on-chain game engine that gives anyone a quick and easy way to create blockchain games, requires no prior coding experience, is governed by players and developers, and provides an unmatched level of interoperability and composability of game mechanics and in-game assets.
                    </p>
                </div>
            </main>
        </div>
    );
};